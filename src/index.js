import express from "express"
import usuarioCont from "./controllers/usuario-controllers.js";
import tarefaCont from "./controllers/tarefa-controllers.js";

const app = express()
const port = 3000

usuarioCont(app)

tarefaCont(app)


app.listen(port , ()=>{
    console.log(`Server Open in http://localhost:${port}`)
})

