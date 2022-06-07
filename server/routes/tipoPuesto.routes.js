module.exports = app => {
  const tipoPuesto = require('../controllers/tipoPuesto.controller')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), tipoPuesto.create)
  router.get('/', tipoPuesto.findAll)
  router.get('/:id', tipoPuesto.findOne)
  router.put('/:id', tipoPuesto.update)
  router.delete('/:id', tipoPuesto.delete)

  app.use('/api/tipospuestos', router)
}