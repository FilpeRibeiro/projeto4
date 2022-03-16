class UsuarioDao {
    constructor(db){
        this.db = db
    }

    pegaUsuario =()=>{
        return new Promise ((resolve,reject) =>{
            this.db.all('SELECT * FROM USUARIOS',(erro, rows)=>{
            if(erro){
                reject({
                    "usuario":erro.message,
                    "erro":true
                })
            }else{
                resolve({
            "usuarios": rows,
            "erro": false
        })
            }
        })
        })
    }
     pegaUmUsuario = (email)=>{
        return new Promise((resolve, reject)=>{
             this.db.all('SELECT * FROM USUARIOS WHERE EMAIL = ?',email, (error, rows)=>{
             if(error){
                reject({
                    "mensagem": error.message,
                    "erro": true
                 })
             }else{
                resolve({
                "usuario": rows,
                "erro": false
                })
                }
             })
         })
    
        }
        inseriUsuario =(usuarioNovo) =>{
            return new Promise((resolve, reject)=>{
                this.db.run("INSERT INTO USUARIOS(NOME, EMAIL, SENHA) VALUES (?, ?, ?)",usuarioNovo.nome, usuarioNovo.email, usuarioNovo.senha, (error)=>{
                    if(error){
                        reject({
                            "mensagem": error.message,
                            "erro": true
                        })
                    }else{
                        resolve({
                            "mensagem": `Usuário ${usuarioNovo.nome} inserido com sucesso`,
                            "usuario": usuarioNovo,
                            "erro": false
                        })
                    }
                })
            })
    
        }
    
        deletaUsuario = (id)=>{
            return new Promise((resolve, reject)=>{
                this.db.run('DELETE FROM USUARIOS WHERE ID = ?',id,(error)=>{
                    if(error){
                        reject({
                            "mensagem": error.message,
                            "erro": true
                        })
                    }else{
                        resolve({
                            "usuario": `Usuario de id ${id} deletado com sucesso`,
                            "erro": false
                        })
                    }
                })
            })
        }
        
        atualizaUsuario = (id, usuario)=>{
            return new Promise((resolve, reject)=>{
                this.db.run('UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE ID = ?', usuario.nome, usuario.email, usuario.senha, id, (error)=>{
                    if(error){
                        reject({
                            "mensagem": error.message,
                            "erro": true
                        })
                    }else{
                        resolve({
                            "mensagem": `Usuario de id ${id} atualizado com sucesso`,
                            "usuario": usuario,
                            "erro": false
                        })
                    }
                })
            })
        }
 
    }
    




export default UsuarioDao