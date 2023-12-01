//IMPORT REQUIRED MODULES
const express = require('express');
const morgan = require('morgan');
//这样app 就拥有了express的一系列方法
const app = express();
const tourRouter = require('./routes/tourRoutes');//创建router 新路由，存入变量， and then use it instead of app.
const userRouter = require('./routes/userRoutes');

// 1) MIDDLEWARE
if (process.env.NODE_ENV === 'development') {//只有在开发环境时，才使用
    app.use(morgan('dev'));// 将会在console打印请求方法，请求url，status code，请求耗时，响应尺寸， 这对于开发很有用
}

//express.json is middleware
app.use(express.json()); //return a function, and that function is then added to the middleware stack  中间件使用use函数
//middleware basically a function that can modify the incoming request data
//so called middleware because it is in the middle of the request and the response.
//You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both 
// these requests you are sending data (in the form of some data object) to the server and you are 
// asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) 
// of that (POST or PUT) Request

//create a middleware by ourself, should before the request handler, or will not be used.
app.use((req,res,next) =>{
    console.log('Hello from the middleware');//每一个请求都会打印这句话。
    next();//call the third argument,which is a function. or it would be stuck, we wouldn't be able to move on 
})

app.use((req,res,next) =>{
    req.requestTime = new Date().toISOString(); //会记录请求时间, 给request对象赋予requestTime属性，这样可以在返回数据时，给出请求时间
    res.reponseTime = new Date().toISOString();
    next();//call the third argument,which is a function. or it would be stuck, we wouldn't be able to move on 
})

//this app.js file that we have here is usually for middleware declarations;
//we have these middlewares that we want to apply to all the routes. --》给 sub application --》mounting 注册路由器
app.use('/api/v1/tours',tourRouter);//we can use the tourRouter on our application"127.0.0.1:3000/api/v1/tours" 看成sub application
app.use('/api/v1/users',userRouter);// we want to use that middleware for this specific route


module.exports = app;

//everthing related to express in this file .