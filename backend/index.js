require('dotenv').config()
const db = require('./db/models/index')
const server = require('./src/server')
const PORT = process.env.PORT || 3001

db.sequelize.sync()
  .then(()=>server.start(PORT))
  .catch( (e) => console.log('sync error',e))
