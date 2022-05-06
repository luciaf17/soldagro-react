const dbConfig = require('../config/db.config.js')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// Creación de modelos (tablas en db)

db.tipoPuesto = require('./tipoPuesto.model')(sequelize, Sequelize)
db.puesto = require('./puesto.model')(sequelize, Sequelize)
db.usuario = require('./usuario.model')(sequelize, Sequelize)
db.rol = require('./rol.model')(sequelize, Sequelize)
db.sector = require('./sector.model')(sequelize, Sequelize)
db.contenedor = require('./contenedor.model')(sequelize, Sequelize)
db.deposito = require('./deposito.model')(sequelize, Sequelize)
db.envase = require('./envase.model')(sequelize, Sequelize)
db.proveedor = require('./proveedor.model')(sequelize, Sequelize)
db.insumo = require('./insumo.model')(sequelize, Sequelize)
db.hojaBarra = require('./hojaBarra.model')(sequelize, Sequelize)
db.material = require('./material.model')(sequelize, Sequelize)
db.materiaPrima = require('./materiaPrima.model')(sequelize, Sequelize)
db.despacho = require('./despacho.model')(sequelize, Sequelize)
db.cliente = require('./cliente.model')(sequelize, Sequelize)
db.pedido = require('./pedido.model')(sequelize, Sequelize)
db.ordenDeTrabajo = require('./ordenDeTrabajo.model')(sequelize, Sequelize)
db.subconjunto = require('./subconjunto.model')(sequelize, Sequelize)
db.conjunto = require('./conjunto.model')(sequelize, Sequelize)
db.pieza = require('./pieza.model')(sequelize, Sequelize)
db.proceso = require('./proceso.model')(sequelize, Sequelize)
db.estructura = require('./estructura.model')(sequelize, Sequelize)
db.entrega = require('./entrega.model')(sequelize, Sequelize)
db.usuario_rol = require('./usuarioRol.model')(sequelize, Sequelize)


// Relaciones y asociaciones entre modelos (tablas en db)

// USUARIO
// puesto_id fk en usuario
db.usuario.belongsTo(db.puesto, {
  foreignKey: 'puesto_id'
})

// muchos a muchos usuario_rol
db.usuario.belongsToMany(db.rol, {
  through: "usuario_rol",
  as: "rol",
  foreignKey: "usuario_id"
})
db.rol.belongsToMany(db.usuario, {
  through: "usuario_rol",
  as: "usuario",
  foreignKey: "rol_id"
})

db.usuario.hasMany(db.ordenDeTrabajo, {
  foreignKey: 'responsable'
})
db.ordenDeTrabajo.belongsTo(db.usuario, {
  foreignKey: 'responsable'
})

//------------------------------//

// PUESTO
// tipo_puesto_id fk en puesto
db.puesto.belongsTo(db.tipoPuesto, {
  foreignKey: 'tipo_puesto_id'
})

// uno a muchos
db.puesto.hasMany(db.contenedor, {
  foreignKey: 'puesto_id'
})
// puesto_id fk en contenedor
db.contenedor.belongsTo(db.puesto, {
  foreignKey: 'puesto_id'
})

//------------------------------//

// CONTENEDOR
// uno a muchos
db.contenedor.hasMany(db.sector, {
  foreignKey: 'contenedor_id'
})
// contenedor_id fk en sector
db.sector.belongsTo(db.contenedor, {
  foreignKey: 'contenedor_id'
})

//------------------------------//

// SECTOR
db.sector.hasMany(db.ordenDeTrabajo, {
  foreignKey: 'sector_id'
})

db.ordenDeTrabajo.belongsTo(db.sector, {
  foreignKey: 'sector_id'
})

//------------------------------//


// DEPOSITO
/* // uno a muchos puestos
db.deposito.hasMany(db.puesto, {
  foreignKey: 'deposito_id'
})
// deposito_id fk en puesto
db.puesto.belongsTo(db.deposito, {
  foreignKey: 'deposito_id'
}) */

// uno a muchos envases
db.deposito.hasMany(db.envase, {
  foreignKey: 'deposito_id'
})
// deposito_id fk en envase
db.envase.belongsTo(db.deposito, {
  foreignKey: 'deposito_id'
})

// uno a muchos insumos
db.deposito.hasMany(db.insumo, {
  foreignKey: 'deposito_id'
})
// deposito_id fk en insumo
db.insumo.belongsTo(db.deposito, {
  foreignKey: 'deposito_id'
})

// uno a muchas hojas/barras
db.deposito.hasMany(db.hojaBarra, {
  foreignKey: 'deposito_id'
})
// deposito_id fk en hoja_barra
db.hojaBarra.belongsTo(db.deposito, {
  foreignKey: 'deposito_id'
})

// uno a muchas piezas
db.deposito.hasMany(db.pieza, {
  foreignKey: 'deposito_id'
})
// deposito_id fk en pieza
db.pieza.belongsTo(db.deposito, {
  foreignKey: 'deposito_id'
})

// uno a muchos subconjuntos
db.deposito.hasMany(db.subconjunto, {
  foreignKey: 'deposito_id'
})
// deposito_id fk en subconjunto
db.subconjunto.belongsTo(db.deposito, {
  foreignKey: 'deposito_id'
})

// uno a muchos conjuntos
db.deposito.hasMany(db.conjunto, {
  foreignKey: 'deposito_id'
})
// deposito_id fk en conjunto
db.conjunto.belongsTo(db.deposito, {
  foreignKey: 'deposito_id'
})

// uno a muchas ordenes de trabajo
db.deposito.hasMany(db.ordenDeTrabajo, {
  foreignKey: 'deposito_id'
})
// deposito_id fk en orden_de_trabajo
db.ordenDeTrabajo.belongsTo(db.deposito, {
  foreignKey: 'deposito_id'
})

//------------------------------//

// PROVEEDOR
// uno a muchos insumos
db.proveedor.hasMany(db.insumo, {
  foreignKey: 'proveedor_id'
})
// proveedor_id fk en insumo
db.insumo.belongsTo(db.proveedor, {
  foreignKey: 'proveedor_id'
})

// uno a muchas hojas/barras
db.proveedor.hasMany(db.hojaBarra, {
  foreignKey: 'proveedor_id'
})
// proveedor_id fk en hoja_barra
db.hojaBarra.belongsTo(db.proveedor, {
  foreignKey: 'proveedor_id'
})

//------------------------------//

// MATERIA PRIMA
// material_id fk en materia prima
db.materiaPrima.belongsTo(db.material, {
  foreignKey: 'material_id'
})

db.materiaPrima.hasMany(db.pieza, {
  foreignKey: 'materia_prima_id'
})
db.pieza.belongsTo(db.materiaPrima, {
  foreignKey: 'materia_prima_id'
})

//------------------------------//

// HOJA/BARRA
// materia_prima_id en hoja_barra
db.hojaBarra.belongsTo(db.materiaPrima, {
  foreignKey: 'materia_prima_id'
})

//------------------------------//

// DESPACHO
db.despacho.hasMany(db.pieza, {
  foreignKey: 'despacho_id'
})
db.pieza.belongsTo(db.despacho, {
  foreignKey: 'despacho_id'
})

db.despacho.hasMany(db.ordenDeTrabajo, {
  foreignKey: 'despacho_id'
})
db.ordenDeTrabajo.belongsTo(db.despacho, {
  foreignKey: 'despacho_id'
})

//------------------------------//

// CLIENTE
db.cliente.hasMany(db.pieza, {
  foreignKey: 'cliente_id'
})
db.pieza.belongsTo(db.cliente, {
  foreignKey: 'cliente_id'
})

db.cliente.hasMany(db.pedido, {
  foreignKey: 'cliente_id'
})
db.pedido.belongsTo(db.cliente, {
  foreignKey: 'cliente_id'
})

db.cliente.hasMany(db.ordenDeTrabajo, {
  foreignKey: 'cliente_id'
})
db.ordenDeTrabajo.belongsTo(db.cliente, {
  foreignKey: 'cliente_id'
})

//------------------------------//

// PEDIDO
db.pedido.hasMany(db.pieza, {
  foreignKey: 'pedido_id'
})
db.pieza.belongsTo(db.pedido, {
  foreignKey: 'pedido_id'
})
/* db.pedido.hasMany(db.ordenDeTrabajo, {
  foreignKey: 'pedido_id'
}) */

//------------------------------//

// ORDEN DE TRABAJO
db.ordenDeTrabajo.belongsTo(db.pedido, {
  foreignKey: 'pedido_id'
})

db.ordenDeTrabajo.belongsTo(db.pedido, {
  foreignKey: 'orden_compra',
  targetKey: 'orden_compra'
})

db.ordenDeTrabajo.hasMany(db.pieza, {
  foreignKey: 'orden_de_trabajo_id'
})
db.pieza.belongsTo(db.ordenDeTrabajo, {
  foreignKey: 'orden_de_trabajo_id'
})

/* db.ordenDeTrabajo.hasMany(db.despacho, {
  foreignKey: 'orden_de_trabajo_id'
})
db.despacho.belongsTo(db.ordenDeTrabajo, {
  foreignKey: 'orden_de_trabajo_id'
}) */

//------------------------------//

// CONJUNTO
db.conjunto.hasMany(db.subconjunto, {
  foreignKey: 'conjunto_id'
})
db.subconjunto.belongsTo(db.conjunto, {
  foreignKey: 'conjunto_id'
})

db.conjunto.hasMany(db.pieza, {
  foreignKey: 'conjunto_id'
})
db.pieza.belongsTo(db.conjunto, {
  foreignKey: 'conjunto_id'
})

//------------------------------//

// SUBCONJUNTO
db.subconjunto.hasMany(db.pieza, {
  foreignKey: 'subconjunto_id'
})
db.pieza.belongsTo(db.subconjunto, {
  foreignKey: 'subconjunto_id'
})


//------------------------------//

// ESTRUCTURA
/* db.estructura.belongsTo(db.pieza, {
  foreignKey: 'pieza_id'
}) */

// PIEZA

db.pieza.belongsTo(db.estructura, {
  foreignKey: 'estructura_id'
})

//------------------------------//


// PROCESO
db.estructura.belongsToMany(db.proceso, {
  through: "estructura_proceso",
  as: "proceso",
  foreignKey: "estructura_id"
})
db.proceso.belongsToMany(db.estructura, {
  through: "estructura_proceso",
  as: "estructura",
  foreignKey: "proceso_id"
})

//------------------------------//

// ENTREGA

db.entrega.belongsTo(db.ordenDeTrabajo, {
  foreignKey: 'orden_de_trabajo_id'
})

db.entrega.belongsTo(db.despacho, {
  foreignKey: 'despacho_id'
})

db.entrega.belongsTo(db.pieza, {
  foreignKey: 'pieza_id'
})


module.exports = db