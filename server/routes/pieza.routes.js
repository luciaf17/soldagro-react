module.exports = app => {
  const pieza = require('../controllers/pieza.controller.js')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), pieza.create)
  router.get('/', pieza.findAll)
  router.get('/:id', pieza.findOne)
  router.put('/:id', pieza.update)
  router.delete('/:id', pieza.delete)

  app.use('/api/piezas', router)
}