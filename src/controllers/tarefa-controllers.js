const tarefaCont = (app)=>{
    app.get('/tarefa', (req ,res)=>{
        res.send(`Corithians com nodemom` )
    })
    app.post('/tarefa',(req ,res)=>{
        res.json({
            "marca":"nike",
            "modelo":"tenis",
            "ano":2022
        })
    })
}

export  default tarefaCont 