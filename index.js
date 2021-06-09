const { urlencoded } = require("body-parser")
const express = require("express")
const app = express()
const connection = require("./database/database") // Conexão com o banco MySQL
const pergunta = require("./database/pergunta") // Importando o model

// Database (MySQL)

connection.authenticate().then(() => {
    console.log("Conexão feita com sucesso")
})
.catch((msgErro) => {
    console.log(msgErro)
})

app.set('view engine','ejs') // Configurando o express para utilizar o EJS como view engine
app.use(express.static('public'))

// Body parser
app.use(urlencoded({extended: false}))
app.use(express.json())

app.get("/",(req,res) => {
    res.render("index") // Renderizando a pagina index.ejs
  
}) // Rota principal da aplicação

app.get("/perguntar",(req,res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta",(req,res) => {

    // Pegando informações do formulario
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    pergunta.create({ // Inserindo no banco
        titulo: titulo, // Campo e variavel
        descricao: descricao
    }).then(() => {
        res.redirect("/") // Redirecionando para a pagina inicial
    })

}) // Rota do tipo post é usado para receber dados de um formulario

app.listen(4000,() => {
    console.log("App rodando!")
})