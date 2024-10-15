import fastify from 'fastify'

const app = fastify({ logger: process.env.VERBOSE === 'true' })

app.get('/fast', async () => {
  // TODO: Your code here
})

app.get('/slow', async () => {
  // TODO: Your code here
})

app.listen({ port: 3000 }, () => {
  console.info(`The server is listening at http://127.0.0.1:${app.server.address().port} ...`)
})
