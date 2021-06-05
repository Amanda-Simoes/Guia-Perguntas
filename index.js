const express = require("express")
const app = express()

app.set('view engine','ejs') // Configurando o express para utilizar o EJS como view engine

app.get("/:nome/:lang",(req,res) => {

    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMsg = false

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-Cola", preco: 6.00},
        {nome: "Leite", preco: 2.15}
    ] // Array de Produto

    res.render("index",{
        nome: nome,
        lang: lang,
        msg: exibirMsg,
        produtos: produtos
    }) // Renderizando a pagina index.ejs
    
}) // Rota principal da aplicação

app.listen(4000,() => {
    console.log("App rodando!")
})