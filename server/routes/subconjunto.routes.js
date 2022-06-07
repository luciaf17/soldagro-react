module.exports = app => {
  const subconjunto = require('../controllers/subconjunto.controller.js')
  const multer = require('multer')
  const upload = multer()

  const router = require('express').Router()

  router.post('/', upload.none(), subconjunto.create)
  router.get('/', subconjunto.findAll)
  router.get('/:id', subconjunto.findOne)
  router.put('/:id', subconjunto.update)
  router.delete('/:id', subconjunto.delete)

  app.use('/api/subconjuntos', router)
}