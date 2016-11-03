
export default class HomeController {
  static async slash (ctx, next) {
    ctx.status = 200
    try {
      ctx.body = { message: 'Welcome to Pacci-api!' }
    } catch (error) {
      ctx.status = 500
      console.error(error)
    } finally {
      await next()
    }
  }
}
