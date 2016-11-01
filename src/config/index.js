import all from './environments/all'
import development from './environments/development'
import test from './environments/test'

const NODE_ENV = process.env.NODE_ENV || 'development'
let environment = {}

switch (NODE_ENV) {
  case 'development':
    environment = development
    break
  case 'test':
    environment = test
    break
  case 'production':
    environment = {}
    break
  default:
    environment = development
    break
}

export default Object.assign({}, all, environment)
