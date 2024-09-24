import fs from 'fs'
import path from 'path'
import browser from './browser'
import data from './data'
import getHTML from './getHTML'
import config from './config'
;(async () => {
  const image = await browser(getHTML(data.routine, data.watermark))
  console.log('Routine image generated successfully!')

  const OUT_DIR = path.dirname(config.outPath)
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })
  fs.writeFileSync(config.outPath, image)

  console.log('Routine image saved successfully!')
  console.log(config.outPath)
})()
