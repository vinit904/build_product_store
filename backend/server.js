import express from 'express'

import bodyParser from 'body-parser';

import userRouter from './routes/user.routers.js'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));

app.use("/product",userRouter);

app.listen(3002, ()=>{
    console.log("http://localhost:3002 server started")
})

