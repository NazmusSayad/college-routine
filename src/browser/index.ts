import puppeteer from 'puppeteer-core'
import { Browser } from '@puppeteer/browsers'
import getBrowserPath from './getBrowserPath'

const viewport = { width: 1920, height: 1080 }

export default async function (content: string) {
  const browser = await puppeteer.launch({
    defaultViewport: viewport,
    executablePath: await getBrowserPath(Browser.CHROMEHEADLESSSHELL),
  })

  console.log('Browser:', await browser.version())
  console.log('Opening browser...')
  const page = await browser.newPage()
  await page.setViewport(viewport)

  console.log('Rendering HTML...')
  await page.setContent(content)
  const element = await page.$('body')
  if (!element) throw new Error('Target Element not found.')

  console.log('Waiting for rendering...')
  await new Promise((res) => setTimeout(res, 500))
  const output = await element.screenshot({
    type: 'png',
  })

  await browser.close()
  return output
}
