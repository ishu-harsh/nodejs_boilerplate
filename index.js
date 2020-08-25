const express = require("express")
const chalk = require("chalk")
var db = require("./config/db")

const app = express()
const port = 3001


app.use(express.json())
app.use(express.urlencoded({extended : false ,limit : "2m" }))

app.listen(port , ()=>{
    console.log(chalk.blue(`Server listening on ${port}`))
})