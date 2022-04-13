module.exports = app => {
  const envase = require('../controllers/envase.controller.js')

  const router = require('express').Router()

  router.post('/', envase.create)
  router.get('/', envase.findAll)
  router.get('/:id', envase.findOne)
  router.put('/:id', envase.update)
  router.delete('/:id', envase.delete)

  app.use('/api/envases', router)
}