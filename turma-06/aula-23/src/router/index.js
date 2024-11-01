import { Router as ExpressRouter } from 'express'

class Router {
  constructor() {
    this.router = ExpressRouter()
    this.init()
  }

  // getter
  getRouter() {
    return this.router
  }

  init() {
    this.get('/', (req, res) => {
      res.send('Olá turma!')
    })
  }

  applyCallbacks(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params)
      } catch (error) {
        console.error(error)
        params[1].status(500).send(error)
      }
    })
  }

  generateCustomResponses(_, res, next) {
    res.sendSuccess = (payload) => res.send({ status: 'success', payload })
    res.sendServerError = (error) =>
      res.status(500).send({ status: 'error', message: error })
    res.sendUserError = (error) =>
      res.status(400).send({ status: 'error', message: error })
    next()
  }

  handlePolicies = (policies) => (req, res, next) => {
    if (policies.includes('PUBLIC')) return next()
    const authHeaders = req.headers.authorization
    if (!authHeaders)
      return res
        .status(401)
        .send({ status: 'error', message: 'Não autorizado' })

    const token = authHeaders.split(' ')[1]
    let user = jwt.verify(token, 'CoderSecret')

    if (!policies.includes(user.role.toUpperCase()))
      return res.status(403).send({ status: 'error', message: 'Proibido' })
    req.user = user
    next()
  }

  get(path, policies, ...callbacks) {
    this.router.get(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    )
  }
  post(path, policies, ...callbacks) {
    this.router.post(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    )
  }
  put(path, policies, ...callbacks) {
    this.router.put(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    )
  }
  delete(path, policies, ...callbacks) {
    this.router.delete(
      path,
      this.handlePolicies(policies),
      this.generateCustomResponses,
      this.applyCallbacks(callbacks)
    )
  }
}

export default Router
