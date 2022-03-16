import express from "express"
import usuarioCont from "./controllers/usuario-controllers.js";
import tarefaCont from "./controllers/tarefa-controllers.js";
// import middleware from "./Middleware/midd.js";
import database from './database/sqlite-db.js'
import sqlite3 from "sqlite3";


const app = express()




// middleware (app .db)

usuarioCont(app ,database)

tarefaCont(app, database)

export default app

