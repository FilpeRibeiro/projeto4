import Usuario from "../models/usuario.js"

const usuarioCont =(app ,db) =>{

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
    app.get('/usuario', (req, res)=>{
        // Buscando informações no banco de dados
        const todosUsuarios = db.usuario
        
        //Resposta com o retorno daquilo que eu busquei
        res.json({
            "usuarios": todosUsuarios,
            "erro": false
        })
    })
    
    app.post('/usuario',(req, res)=>{
        // Recebe o corpo da requisição
        const body = req.body
        
        // Como temos validações na nossa model, usamos o try/catch
        // para pegar esse erro e enviar como mensagem para nosso cliente
        try {
            // cria uma instancia de Usuario com validação dos dados
            // apartir do corpo que foi recebido
            const novoUsuario = new Usuario(body.nome, body.email, body.senha)
            
            // insere a instância do usuario no banco de dados
            bd.usuarios.push(novoUsuario)
            
            // Resposta com o retorno do processo
            res.json({
                "msg": `Usuário ${novoUsuario.nome} inserido com sucesso`,
                "usuario": novoUsuario,
                "erro": false
            })
        } catch (error) {
            // Envia o erro, caso exista
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
        
    })
     app.get('/usuario/email/:email' ,(req,res)=>{
         const email = req.params.email
         const usuarioEncontrado = db.usuario.filter(usuario.email == email)
         res.json({
             "usuario": usuarioEncontrado
         })
     
    })
    app.delete('/usuario/email/:email' ,(req,res)=>{
        const email = req.params.email
        const novoDB = db.usuario.filter(usuario.email !== email)
        db.usuario = novoDB
        res.json({
            "msg":"Usuario deletado"
        })
    })

    app.put('usuario/email/:email', (req ,res)=>{

        const email = req.params.email
        const body = req.body
        try{
           const usuarioATT = new Usuario(body.nome, body.email, body.senha)

            db.usuario = db.usuario.map(usuario =>{
                if(usuario === email){
                    return usuarioATT
                } return usuario
            })
        res.json({
            email: email,
            body:body
        })  

        }catch (erro){
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
       

    })
}

export default usuarioCont