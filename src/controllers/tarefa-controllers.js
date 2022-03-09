import Tarefa from "../models/tarefa.js"


const tarefaCont = (app ,db)=>{
    app.get('/tarefa', (req ,res)=>{
        res.send(`Corithians com nodemom` )
    })
    app.post('/tarefa',(req ,res)=>{

        const body= req.body
        console.log('vai corinthnis')
        console.log(body)
        res.json({
            "marca":"nike",
            "modelo":"tenis",
            "ano":2022,
            "corpo":body
        })
    })
    app.get('/tarefa', (req, res)=>{
        // Buscando informações no banco de dados
        const todasTarefas = db.tarefas

        //Resposta com o retorno daquilo que eu busquei
        res.json({
            "tarefas": todasTarefas,
            "erro": false
        })
    })

    app.post('/tarefa',(req, res)=>{
        // Recebe o corpo da requisição
        const body = req.body

        // Como temos validações na nossa model, usamos o try/catch
        // para pegar esse erro e enviar como mensagem para nosso cliente
        try {
            // cria uma instancia de Tarefa com validação dos dados
            // apartir do corpo que foi recebido
            const novaTarefa = new Tarefa(body.titulo, body.descricao, body.status)

            // insere a instância da tarefa no banco de dados
            bd.tarefas.push(novaTarefa)

            // Resposta com o retorno do processo
            res.json({
                "msg": `Tarefa com título ${novaTarefa.titulo} inserida com sucesso`,
                "tarefas": novaTarefa,
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

    app.get('/tarefa/email/:email' ,(req,res)=>{
        const email = req.params.email
        const usuarioEncontrado = db.usuario.filter(usuario.email == email)
        res.json({
            "usuario": usuarioEncontrado
        })
    
   })
   app.delete('/tarefa/email/:email' ,(req,res)=>{
       const email = req.params.email
       const novoDB = db.usuario.filter(usuario.email !== email)
       db.usuario = novoDB
       res.json({
           "msg":"Usuario deletado"
       })
   })
}



export  default tarefaCont 