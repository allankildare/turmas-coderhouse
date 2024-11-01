import Router from './../router/index.js'

class UserRouter extends Router {
  init() {
    this.get('/', ['PUBLIC'], (req, res) => {
      res.sendSuccess('Olá Coders')
    })
  }
}
