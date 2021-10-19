const { Sequelize } = require('sequelize');
const { config } = require('./../config/config');
const setupModels  = require('../db/models');

const options = {
  //a que base de datos nos conectamos
  dialect: 'postgres',
  //obtner por consola la consultas del ORM cual es el resultado
  logging: config.isProd ? false : true,
}

if (config.isProd) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }

}

//se va a enviar las dos URL ya sea de produccion o de desarrollo
const sequelize = new Sequelize(config.dbUrl, options);

// se corre despues cuando se hace la instancia
setupModels(sequelize);

//se hace una sincronizacion recoge los modelos y crea esa estructura
sequelize.sync();
module.exports = sequelize;
