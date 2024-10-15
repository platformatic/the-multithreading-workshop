import fastify from 'fastify'

export function create() {
  const app = fastify({
    loggerInstance: globalThis.platformatic?.logger?.child({}, { level: globalThis.platformatic?.logLevel ?? 'info' })
  })

  // TODO: Your code here

  return app
}
