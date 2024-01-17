import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'
import getHTML from '@/src/utils/getHTML'

export default async (req: any, res: any) => {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath:
      process.env.NODE_ENV === 'development'
        ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
        : await chromium.executablePath(),
    headless: true,
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1600, height: 900 })

  const html = req.body
    ? getHTML(req.body)
    : '<main><h1>Nothing to show</h1></main>'
  await page.setContent(html)

  const element = await page.$('main')
  const output =
    element && (await element.screenshot({ encoding: 'base64', quality: 100, type: 'jpeg' }))

  res.send('data:image/png;base64,' + output)
  await browser.close()
}
