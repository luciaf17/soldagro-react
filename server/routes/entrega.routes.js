module.exports = app => {
  const entrega = require('../controllers/entrega.controller.js')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), entrega.create)
  router.get('/', entrega.findAll)
  router.get('/:id', entrega.findOne)
  router.put('/:id', entrega.update)
  router.delete('/:id', entrega.delete)

  app.use('/api/entregas', router)
}