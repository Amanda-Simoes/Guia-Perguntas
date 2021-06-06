const { urlencoded } = require("body-parser")
const express = require("express")
const app = express()

app.set('view engine','ejs') // Configurando o express para utilizar o EJS como view engine
app.use(express.static('public'))
app.use(urlencoded({extended: false}))
app.use(express.json())

app.get("/",(req,res) => {

    res.render("index") // Renderizando a pagina index.ejs
    
}) // Rota principal da aplicação

app.get("/perguntar",(req,res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta",(req,res) => {

    // Peganfo informações do formulario
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send("Formulario recebido! titulo: " + titulo + " descricao " + descricao)

}) // Rota do tipo post é usado para receber dados de um formulario

app.listen(4000,() => {
    console.log("App rodando!")
})