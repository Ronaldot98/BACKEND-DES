const { config } = require('./../config/config');

module.exports = {
  //definir los ambientes produccion y de desarrollo
  development: {
    url: config.dbUrl,
    dialect: 'postgres',
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions: {
      ssl:{
        rejectUnauthorized:false
    }

    }
  }
}
