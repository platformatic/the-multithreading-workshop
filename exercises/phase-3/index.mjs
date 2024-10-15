import fastify from 'fastify'
import { isMainThread, parentPort } from 'node:worker_threads'

const SHA256_BYTE_LENGTH = 32

async function startWorker() {
  parentPort.on('message', message => {
    // TODO: Your code here
  })
}

function startServer() {
  const app = fastify({ logger: process.env.VERBOSE === 'true' })

  // TODO: Your code here

  app.listen({ port: 3000 }, () => {
    console.info(`The server is listening at http://127.0.0.1:${app.server.address().port} ...`)
  })
}

if (isMainThread) {
  await startServer()
} else {
  await startWorker()
}
