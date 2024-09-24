import path from 'path'
import * as browsers from '@puppeteer/browsers'
const CACHE_DIR = path.join(process.cwd(), '.cache', 'puppeteer')

export default async function (browser: browsers.Browser) {
  let isBrowserDownloading = false
  const installedBrowser = await browsers.install({
    browser: browser,
    cacheDir: CACHE_DIR,
    buildId: await browsers.resolveBuildId(
      browser,
      browsers.detectBrowserPlatform(),
      'latest'
    ),

    downloadProgressCallback: (downloadedBytes, totalBytes) => {
      const percentage = (downloadedBytes / totalBytes) * 100
      const downloadedUnit = convertBytesToUnit(downloadedBytes)
      const totalSizeUnit = convertBytesToUnit(totalBytes)

      if (isBrowserDownloading) {
        process.stdout.cursorTo(0)
        process.stdout.clearLine(0)
      } else {
        console.log('Downloading browser...')
        isBrowserDownloading = true
      }

      process.stdout.write(
        `Downloaded ${percentage.toFixed(
          2
        )}% (${downloadedUnit} / ${totalSizeUnit})`
      )
    },
  })

  if (isBrowserDownloading) console.log('')
  return installedBrowser.executablePath
}

function convertBytesToUnit(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let index = 0
  let value = bytes

  while (value >= 1024 && index < units.length - 1) {
    value /= 1024
    index++
  }

  return `${value.toFixed(2)} ${units[index]}`
}
