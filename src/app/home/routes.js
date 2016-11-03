import Router from 'koa-router'
import HomeController from './controller'

const homeRouter = new Router({ prefix: '/' })

homeRouter.get('/', HomeController.slash)
homeRouter.post('/', HomeController.slash)
homeRouter.put('/', HomeController.slash)
homeRouter.delete('/', HomeController.slash)

export default homeRouter
