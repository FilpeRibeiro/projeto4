import express from "express"
import usuarioCont from "./controllers/usuario-controllers.js";
import tarefaCont from "./controllers/tarefa-controllers.js";
import middleware from "./Middleware/midd.js";
import db from './database/db.js'

const app = express()
const port = 3000


middleware (app .db)

usuarioCont(app .db)

tarefaCont(app, db)



app.listen(port , ()=>{
    console.log(`Server Open in http://localhost:${port}`)
})

