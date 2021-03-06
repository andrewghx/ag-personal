import { createServer } from 'http'
import next from 'next'

const port = Number(process.env.PORT || '3000')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res)
  }).listen(port)
  console.log(`Server ready at http://localhost:${port}`)
})
