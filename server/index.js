const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

app.use('/api/artist', require('./routes/artist'));
app.use('/api/picture', require('./routes/picture'));
app.use('/api/new', require('./routes/new'));

async function start() {
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.use(nuxt.render)
  app.listen(port, host)
  console.log(`Server started on local ${host}:${port}`)
}
start()
