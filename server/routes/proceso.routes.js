module.exports = app => {
  const proceso = require('../controllers/proceso.controller')

  const router = require('express').Router()

  router.post('/', proceso.create)
  router.get('/', proceso.findAll)
  router.get('/:id', proceso.findOne)
  router.put('/:id', proceso.update)
  router.delete('/:id', proceso.delete)

  app.use('/api/procesos', router)
}