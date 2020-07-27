
// Fastify is a web framework for node.js
const fastify = require('fastify')

// Create fastify app
const app = fastify({
    logger: true,
    pluginTimeout: 10000
  })

// Funcionality is implemented as a fastify plugin
app.register(require('./plugin.js'))


// Run the server
const start = async () => {
    try {
        // Need the 0.0.0.0 for it work out of container
        await app.listen(3000, '0.0.0.0')
        app.log.info(`server listening on ${app.server.address().port}`)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

// Docker entrypoint is here
start()