import fastify from 'fastify'

export function create() {
  const app = fastify({
    loggerInstance: globalThis.platformatic?.logger?.child({}, { level: globalThis.platformatic?.logLevel ?? 'info' })
  })

  app.get('/fast', async () => {
    // TODO: Your code here
  })

  app.get('/slow', async () => {
    // TODO: Your code here
  })

  return app
}
