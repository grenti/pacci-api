import Router from 'koa-router'
import SprintController from './controller'

const sprintRouter = new Router({ prefix: '/sprints' })

sprintRouter.get('/', SprintController.getAll)
sprintRouter.get('/:id', SprintController.get)
sprintRouter.post('/', SprintController.create)
// sprintRouter.put('/:id', {})
// sprintRouter.remove('/:id', {})

export default sprintRouter
