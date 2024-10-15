import fastify from 'fastify'
import { isMainThread, Worker } from 'node:worker_threads'

async function startWorker() {
  // TODO: Your code here
}

function startServer() {
  const app = fastify({ logger: process.env.VERBOSE === 'true' })
  const worker = new Worker(import.meta.filename)

  // TODO: Your code here

  app.listen({ port: 3000 }, () => {
    console.info(`The server is listening at http://127.0.0.1:${app.server.address().port} ...`)
  })
}

if (isMainThread) {
  startServer()
} else {
  await startWorker()
}
