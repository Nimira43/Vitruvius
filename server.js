const http = require('http')
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')
  res.write('<h1>Hello World</h1>')
  res.end()
})

const PORT = 5001

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))