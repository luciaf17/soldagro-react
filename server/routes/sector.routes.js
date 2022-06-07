module.exports = app => {
  const sector = require('../controllers/sector.controller.js')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), sector.create)
  router.get('/', sector.findAll)
  router.get('/:id', sector.findOne)
  router.put('/:id', sector.update)
  router.delete('/:id', sector.delete)

  app.use('/api/sectores', router)
}