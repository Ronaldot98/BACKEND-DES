// se va a leer un archivo por defecto que es .env las carga en el process de node
require('dotenv').config();
const config={
  //en que entorno estamos trabajando
  env: process.env.NODE_ENV || 'dev',
  //variable de produccion en heroku
  //nos indica si estamos o no en produccion
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  //leer  la variable que nos manda heroku
  dbUrl: process.env.DATABASE_URL
}

module.exports ={config}
