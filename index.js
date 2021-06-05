const express = require("express")
const app = express()

app.set('view engine','ejs') // Configurando o express para utilizar o EJS como view engine

app.get("/",(req,res) => {

    var nome = "Amanda"
    var lang = "Java"

    res.render("index",{
        nome: nome,
        lang: lang
    }) // Renderizando a pagina index.ejs
    
}) // Rota principal da aplicação

app.listen(4000,() => {
    console.log("App rodando!")
})