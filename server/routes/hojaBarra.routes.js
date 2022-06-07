module.exports = app => {
  const hojaBarra = require('../controllers/hojaBarra.controller.js')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), hojaBarra.create)
  router.get('/', hojaBarra.findAll)
  router.get('/:id', hojaBarra.findOne)
  router.put('/:id', hojaBarra.update)
  router.delete('/:id', hojaBarra.delete)

  app.use('/api/hojasbarras', router)
}