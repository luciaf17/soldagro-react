module.exports = app => {
  const login = require('../controllers/login.controller.js')
  const multer = require('multer')
  const upload = multer()
  const router = require('express').Router()

  router.post('/', upload.none(), login.login)

  app.use('/api/login', router)
}