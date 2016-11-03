import Sprint from './model'

export default class SprintController {
  static async getAll (ctx, next) {
    try {
      const sprints = await Sprint.find({}).lean().exec()
      ctx.body = sprints
    } catch (error) {
      ctx.status = 500
      console.error(error)
    } finally {
      await next()
    }
  }

  static async get (ctx, next) {
    try {
      ctx.body = await Sprint.find({ _id: ctx.params.id }).exec()
    } catch (error) {
      ctx.status = 500
      console.error(error)
    } finally {
      await next()
    }
  }

  static async create (ctx, next) {
    try {
      const sprint = new Sprint(ctx.request.body)
      ctx.status = 201
      ctx.body = await sprint.save()
    } catch (error) {
      ctx.status = 500
      console.error(error)
    } finally {
      await next()
    }
  }
}
