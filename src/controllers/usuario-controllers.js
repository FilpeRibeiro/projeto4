const usuarioCont =(app) =>{

    app.get('/usuario', (req ,res)=>{
        res.send(`<iframe width="900" height="600" src="https://www.youtube.com/embed/0MPq9QGUBa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` )
    })
    app.post('/usuario',(req ,res)=>{
        // a funçao que eu inserir e que vai dizer o q fazer
        //
        res.json({
            "nome":"Filipe",
            "idade":27,
            "sexo":"masculino",
            "ocupaçao":"estudante"
        })
    })
}

export default usuarioCont