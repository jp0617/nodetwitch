const express=require('express')
const env = require("dotenv");
const celebrate=require('celebrate')
const cors=require('cors')
const userroutes=require('./src/routes/users.routes')  
const gameroutes=require('./src/routes/game.routes')  
const mongo=require('./src/conections/databaseMongo')
const postgres=require('./src/conections/databaseMysql')
const app= express();
env.config();

app.set('port',3000)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/users',userroutes)
app.use('/',gameroutes)
app.use(celebrate.errors())

app.listen(app.get('port'),()=>{
    console.log('listening on port ',app.get('port'));
})
