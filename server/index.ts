import { createServer } from 'http'
import next from 'next'
import generateSeoFiles from '~/scripts/generateSeoFiles'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

generateSeoFiles()

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res)
  }).listen(port)
  console.log(`Server ready at http://localhost:${port}`)
})