const express = require("express")
const app = express()

app.set('view engine','ejs') // Configurando o express para utilizar o EJS como view engine
app.use(express.static('public'))

app.get("/",(req,res) => {

    res.render("index") // Renderizando a pagina index.ejs
    
}) // Rota principal da aplicação

app.listen(4000,() => {
    console.log("App rodando!")
})