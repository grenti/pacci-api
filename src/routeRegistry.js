import homeRouter from './app/home/routes'
import sprintRouter from './app/sprints/routes'

const routeRegistry = app => {
  app.use(homeRouter.routes())
  app.use(homeRouter.allowedMethods())

  app.use(sprintRouter.routes())
  app.use(sprintRouter.allowedMethods())
}

export default routeRegistry
