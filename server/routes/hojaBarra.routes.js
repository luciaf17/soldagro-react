module.exports = app => {
  const hojaBarra = require('../controllers/hojaBarra.controller.js')

  const router = require('express').Router()

  router.post('/', hojaBarra.create)
  router.get('/', hojaBarra.findAll)
  router.get('/:id', hojaBarra.findOne)
  router.put('/:id', hojaBarra.update)
  router.delete('/:id', hojaBarra.delete)

  app.use('/api/hojasbarras', router)
}