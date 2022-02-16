const { db_authed } = require('./db/models/index')
const { start, app } = require('./src/server')
const cors = require('cors');
const corsOptions = {
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3001

db_authed() && start(PORT)
