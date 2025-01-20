import fs from 'fs'
import path from 'path'
import data from './data'
import config from './config'
import browser from './browser'
import getHTML from './getHTML'
;(async () => {
  const OUT_DIR = path.dirname(config.outPath)
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

  const html = getHTML(data.routine, data.watermarkText, data.footerText)
  fs.writeFileSync(config.htmlOutPath, html)
  console.log('Routine HTML generated successfully!')

  const image = await browser(html)
  console.log('Routine image generated successfully!')
  fs.writeFileSync(config.outPath, image)
  console.log('Routine image saved successfully!')
})()
