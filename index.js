const express = require("express")
const app = express()

app.set('view engine','ejs') // Configurando o express para utilizar o EJS como view engine

app.get("/:nome/:lang",(req,res) => {

    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMsg = false

    res.render("index",{
        nome: nome,
        lang: lang,
        msg: exibirMsg
    }) // Renderizando a pagina index.ejs
    
}) // Rota principal da aplicação

app.listen(4000,() => {
    console.log("App rodando!")
})