const middleware = (app) =>{


app.use((req,res, next)=>{
    const body= req.body
    const head= req.headers
    console.log(head)
    if(body.nome ==="filipe"){
        res.send('e nois q voa bruxao')
    }else{
    console.log('to qui')
    }
    next()
})
}

export default middleware