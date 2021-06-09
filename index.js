const { urlencoded } = require("body-parser")
const express = require("express")
const app = express()
const connection = require("./database/database") // Conexão com o banco MySQL
const pergunta = require("./database/pergunta") // Importando o model pergunta
const resposta = require("./database/resposta")// Importando o modelo resposta

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

    pergunta.findAll({ raw: true, order:[
        ['id','DESC']
    ]}).then(perguntas => {
        res.render("index",{
            perguntas: perguntas
        })
    })

  
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

app.get("/pergunta/:id",(req,res) => {

    var id = req.params.id;
    pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){ // A pergunta existe

            resposta.findAll({
                where: {perguntaId: pergunta.id}, // Pegando respostas com o mesmo id da pergunta
                order: [['id','DESC']]
            }).then(respostas => {
                res.render("pergunta",{
                    pergunta: pergunta,
                    respostas: respostas
                })
            })

        }else{ // A pergunta não existe
            res.redirect("/")
        }
    })

})

app.post("/responder",(req,res) => {

    var corpo = req.body.corpo
    var perguntaId = req.body.perguntaId
    resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/"+perguntaId)
    })

})

app.listen(4000,() => {
    console.log("App rodando!")
})