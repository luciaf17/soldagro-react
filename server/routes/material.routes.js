module.exports = app => {
  const material = require('../controllers/material.controller.js')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), material.create)
  router.get('/', material.findAll)
  router.get('/:id', material.findOne)
  router.put('/:id', material.update)
  router.delete('/:id', material.delete)

  app.use('/api/materiales', router)
}