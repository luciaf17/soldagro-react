module.exports = app => {
  const estructura = require('../controllers/estructura.controller')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), estructura.create)
  router.get('/', estructura.findAll)
  router.get('/:id', estructura.findOne)
  router.put('/:id', estructura.update)
  router.delete('/:id', estructura.delete)

  app.use('/api/estructuras', router)
}