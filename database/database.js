const Sequelize = require('sequelize')
require('dotenv').config()

/*
const connection = new Sequelize("guiaperguntas","root","Hstr1235",{
    host: "localhost",
    dialect: "mysql"
})
*/


const connection = new Sequelize(process.env.MYSQL_DB,process.env.MYSQL_ROOT,process.env.MYSQL_PASSWORD,{ 
    host: "localhost",
    dialect: "mysql"
})


module.exports = connection