import fs from 'fs'
import path from 'path'
import browser from './browser'
import data from './data'
;(async () => {
  const image = await browser(data)
  console.log('Routine image generated successfully!')

  const OUT_DIR = path.join(__dirname, '../out')
  const OUT_PATH = path.join(OUT_DIR, 'routine.png')

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })
  fs.writeFileSync(OUT_PATH, image)

  console.log('Routine image saved successfully!')
  console.log(OUT_PATH)
})()
