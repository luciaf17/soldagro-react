module.exports = app => {
  const ordenDeTrabajo = require('../controllers/ordenDeTrabajo.controller.js')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), ordenDeTrabajo.create)
  router.get('/', ordenDeTrabajo.findAll)
  router.get('/:id', ordenDeTrabajo.findOne)
  router.put('/:id', ordenDeTrabajo.update)
  router.delete('/:id', ordenDeTrabajo.delete)

  app.use('/api/ordenesdetrabajo', router)
}