module.exports = app => {
  const proveedor = require('../controllers/proveedor.controller.js')

  const router = require('express').Router()

  router.post('/', proveedor.create)
  router.get('/', proveedor.findAll)
  router.get('/:id', proveedor.findOne)
  router.put('/:id', proveedor.update)
  router.delete('/:id', proveedor.delete)

  app.use('/api/proveedores', router)
}