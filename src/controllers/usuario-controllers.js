import Usuario from "../models/usuario.js"
import UsuarioDao from "../DAO/usuarioDAO.js"

const usuarioCont =(app ,db) =>{

    // app.get('/usuario', (req ,res)=>{
    //     res.send(`<iframe width="900" height="600" src="https://www.youtube.com/embed/0MPq9QGUBa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` )
    // })
    // app.post('/usuario',(req ,res)=>{
    //     // a funçao que eu inserir e que vai dizer o q fazer
    //     //
    //     res.json({
    //         "nome":"Filipe",
    //         "idade":27,
    //         "sexo":"masculino",
    //         "ocupaçao":"estudante"
    //     })
        
    // })
    const usuarioD = new UsuarioDao(db)
    app.get('/usuario', (req, res)=>{
        usuarioD.pegaUsuario()
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
        
        //Resposta com o retorno daquilo que eu busquei
        
    })
    
    app.post('/usuario',(req, res)=>{
        
        const body = req.body
        try {
            const usuarioNovo = new Usuario(body.nome, body.email, body.senha)
            usuarioD.inseriUsuario(usuarioNovo)
            
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
            })

        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }  
    })
    app.get('/usuario/email/:email', (req, res)=>{
        const email = req.params.email
        usuarioD.pegaUmUsuario(email)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })
    app.delete('/usuario/id/:id', (req, res)=>{
        const id = req.params.id
        usuarioD.deletaUsuario(id)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.put('/usuario/id/:id', (req, res)=>{
        const id = req.params.id
        const body = req.body
        try {
            
            const usuarioAtualizado = new Usuario(body.nome, body.email, body.senha)

            
            usuarioD.atualizaUsuario(id, usuarioAtualizado)
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
            })

        } catch (error) {
           
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
}

export default usuarioCont