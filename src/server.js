import Koa from 'koa'
import body from 'koa-bodyparser'
import convert from 'koa-convert'
import cors from 'koa-cors'
import mongoose from 'mongoose'
import config from './config'
import mongooseConfig from './config/mongoose'
import routeRegistry from './routeRegistry'

const app = new Koa()
app.context.db = mongoose
mongooseConfig()

app.on('error', (err, context) => {
  console.error(`Server error: ${err} \nContext: ${context}`)
})

app.use(body())
app.use(convert(cors({ origin: true, methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'] })))

app.use(async function (ctx, next) {
  const start = new Date()
  await next()
  const ms = new Date() - start
  ctx.set(`X-Response-Time: ${ms}`)
  ctx.set('X-Server: node')
})

app.use(async function (ctx, next) {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

routeRegistry(app)

const { server } = config
app.listen(server.port, () =>
  console.log(`Server started at http://localhost:${server.port}`))

// export default app
