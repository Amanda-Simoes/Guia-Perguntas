const Sequelize = require('sequelize')
const connection = require('./database')

const Pergunta = connection.define('pergunta',{
    titulo:{ // Campo
        type: Sequelize.STRING, // Tipo
        allowNull: false // Não aceita valor nulo
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
}) // Model de Pergunta (Tabela Pergunta com os campos sendo titulo e descricao)

Pergunta.sync({force: false}).then(() => {
    console.log("Tabela criada")
}) // Sincronizando com o banco de dados