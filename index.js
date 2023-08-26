const express = require("express")
const userRouter = require('./app/router/User')

const app = express()

app.use(express.json());

app.use('/user', userRouter)

console.log('server listening at 3000');
app.listen(3000)