import fastify from 'fastify'
import { createHash, randomBytes } from 'node:crypto'

const app = fastify({ logger: process.env.VERBOSE === 'true' })

app.get('/fast', async () => {
  return { time: Date.now() }
})

app.get('/slow', async () => {
  const bytes = randomBytes(1e9)
  const hash = createHash('sha256').update(bytes).digest('hex')

  return { hash }
})

app.listen({ port: 3000 }, () => {
  console.log(`The server is listening at http://127.0.0.1:${app.server.address().port} ...`)
})
