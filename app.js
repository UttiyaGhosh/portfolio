require("dotenv").config()
const express = require("express")
const apiRouter = require("./src/routes/api")

const app= express()
const port = process.env.PORT

app.set("view engine","ejs")
app.set("views","./views")
app.use('/images',express.static('./assets/images'));
app.use('/css',express.static('./assets/styles'));
app.use('/files',express.static('./assets/files'));

app.use("/",apiRouter)

app.use((req,res)=>{
    data={
        pagetitle:"Uttiya - Not Found"
    }
    res.status(404).render("./404",data)
})

app.listen(port,()=>{
    console.log(`Server started on port: ${port}`)
})