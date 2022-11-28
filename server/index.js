const express = require('express');
const { connectDB } = require('./config/dbConn');
const app = express();

const dotenv = require('dotenv').config({path:'./config.env'})
const Port = process.env.PORT

connectDB()
app.use(express.json());
app.get('/', (req,res)=>{
    res.send('Home First page')
})

app.use('/customer', require('./router/customerRoute'))

app.use('/user', require('./router/userRoute'))

app.use('/desposition', require('./router/despositionRoute'));

app.listen(Port,()=>{
    console.log('server is running')
})