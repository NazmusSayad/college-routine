import http from 'http'
import browser from './browser'
import templateHtml from './templateHtml'

const server = http.createServer(async (req, res) => {
  if (req.url === '/html') {
    const html = templateHtml()

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    return res.end(html, 'utf-8')
  }

  if (req.url === '/image') {
    const html = templateHtml()
    const image = await browser(html)

    res.writeHead(200, { 'Content-Type': 'image/png' })
    return res.end(image, 'binary')
  }

  if (req.url === '/') {
    res.writeHead(302, { Location: '/image' })
    return res.end()
  }

  res.writeHead(404)
  res.end('Not Found')
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  console.log('You can access the html at http://localhost:3000/html')
  console.log('You can access the image at http://localhost:3000/image')
  console.log('')
})
