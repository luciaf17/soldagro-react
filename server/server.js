const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./models')

/* let corsOptions = {
  origin: 'http://localhost:3001'
} */

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// método que sincroniza los modelos de sequelize y luego inicia el server.
// el parametro '{ force: true }' dentro de .sync() provoca el wipe data del server
// esta opcion es util cuando se cambian los modelos constantemente.
db.sequelize.sync()

require('./routes/tipoPuesto.routes')(app)
require('./routes/puesto.routes')(app)
require('./routes/usuario.routes')(app)
require('./routes/rol.routes')(app)
require('./routes/contenedor.routes')(app)
require('./routes/sector.routes')(app)
require('./routes/deposito.routes')(app)
require('./routes/envase.routes')(app)
require('./routes/proveedor.routes')(app)
require('./routes/insumo.routes')(app)
require('./routes/hojaBarra.routes')(app)
require('./routes/material.routes')(app)
require('./routes/materiaPrima.routes')(app)
require('./routes/despacho.routes')(app)
require('./routes/cliente.routes')(app)
require('./routes/pedido.routes')(app)
require('./routes/ordenDeTrabajo.routes')(app)
require('./routes/subconjunto.routes')(app)
require('./routes/conjunto.routes')(app)
require('./routes/pieza.routes')(app)
require('./routes/estructura.routes')(app)
require('./routes/proceso.routes')(app)
require('./routes/entrega.routes')(app)
require('./routes/usuarioRol.routes')(app)
require('./routes/login.routes')(app)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})