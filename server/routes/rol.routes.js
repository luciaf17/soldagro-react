module.exports = app => {
  const rol = require('../controllers/rol.controller.js')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), rol.create)
  router.get('/', rol.findAll)
  router.get('/:id', rol.findOne)
  router.put('/:id', rol.update)
  router.delete('/:id', rol.delete)

  app.use('/api/roles', router)
}