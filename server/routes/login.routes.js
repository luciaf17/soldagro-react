module.exports = app => {
  const login = require('../controllers/login.controller.js')

  const router = require('express').Router()

  router.post('/', login.login)

  app.use('/api/login', router)
}