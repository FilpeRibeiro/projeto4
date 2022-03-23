import Usuario from "../models/usuario.js"
import UsuarioDao from "../DAO/usuarioDAO.js"

const usuarioCont =(app ,db) =>{

    const usuarioD = new UsuarioDao(db)
    app.get('/usuario',async (req, res)=>{
        try{
           const pegaUsuario = usuarioD.pegaUsuario()
           res.json(pegaUsuario)
        }catch(erro){
            res.json(erro)
        }
        
       
        
    })
    
    app.post('/usuario',(req, res)=>{
        
        const body = req.body
        console.log(req.body)
        try {
            const usuarioNovo = new Usuario(body.nome, body.email, body.senha)
            console.log(usuarioNovo)
            usuarioD.inseriUsuario(usuarioNovo)
            
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
            })

        } catch (error) {
            res.json({
                "msg1": error.message,
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