import express from "express"

const app = express()
const port = 3000

app.get('/usuario', (req ,res)=>{
    res.send(`<iframe width="900" height="600" src="https://www.youtube.com/embed/0MPq9QGUBa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` )
})

app.get('/usuario,/:nome', (req ,res)=>{
    res.send(`<iframe width="560" height="315" src="https://www.youtube.com/embed/0yFcMC3am80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
})
app.get('/tarefa', (req ,res)=>{
    res.send(`Corithians` )
})

app.listen(port , ()=>{
    console.log(`Server Open in http://localhost:${port}`)
})