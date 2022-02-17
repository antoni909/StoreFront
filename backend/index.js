const { db_authed } = require('./db/models/index')
const { start } = require('./src/server')
const PORT = process.env.PORT || 3001

db_authed() && start(PORT)
