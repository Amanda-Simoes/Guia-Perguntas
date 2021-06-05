const express = require("express")
const app = express()

app.get("/",(req,res) => {
    res.send("Bem vindo ao meu site!")
}) // Rota principal da aplicação

app.listen(4000,() => {
    console.log("App rodando!")
})