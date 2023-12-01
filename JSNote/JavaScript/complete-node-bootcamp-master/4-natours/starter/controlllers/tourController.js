const fs = require('fs');

//JSON.parse 将json字符串转化为js对象或者数组。原来是对象就转换为对象，原来是数组就转换为数组
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
    //The __dirname in a node script returns the path of the folder where the current JavaScript file resides.
    //  .单独写一个/指的是根目录；
    // ./指的是同级别的目录，如果写././指的与./是同一件事；
   // ../指的是引用者的上一级目录，千万注意到底是谁在引用；
    );
//Param Middleware !!
exports.checkID = (req, res, next, val) => {
    console.log(`Tour id is : ${val}`);
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        });
    }
    next();
};

exports.checkBody = (req, res, next) => {

    if (!req.body.name || !req.body.price) {
        return res.status(404).json({
            status: 'fail',
            message: 'Missing name or price'
        });
    }
    next();
};

exports.getAllTours  = (req,res) => { //request handler
    //返回status code，和json数据, which called Jsend format，就是有一个status，然后是data 键里面包含js对象
    res.status(200).json({//浏览器期待的返回数据形式, in Json, everything has to be in double quotes, will convert js object to json automatically
        status: 'success',
        requestAt: req.requestTime,
        responseAt: res.reponseTime,
        results: tours.length,//only sending this when we sending an array with multiple objects 。 json数组里面包含多个对象。
        data:{
            tours//此处相当于tours：tours， 只有当key和value同名的时候。才可以省略
        }
    });
};

exports.getTour = (req,res) => { 
    console.log(req.params);  //req.params is where all the parameters of all the variable that we define here are created
    
    const id = req.params.id * 1; //nice trick in javascript, a string multiply a number, it will then automatically convert that string to a number

    const tour = tours.find(el => el.id === id)//find will return the first element where comparison turns out to be true

    res.status(200).json({    
        status: 'success',
        data:{
            // tours:tour
            tour //equal tour:tour
        }
    });
};

exports.createNewTour = (req,res) => {
    // console.log(req.body);  //if want read body in the req, we have to use middleware express.json, would return an js object
    // res.send('Done');
    // following code: prepare the request body for saving
    const newId = tours[tours.length - 1].id + 1;
    console.log(newId);
    const newTour = Object.assign({ id: newId},req.body);//mergering two existing objects together . 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性, Object.assign(target, source)
    tours.push(newTour);//tours 是一个js数组，将一个js对象加入js数组当中
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),(err) => {
        res.status(201).json({  //200 stands for ok, 201 stands for created, which create a new resource on the server
            status: 'success',
            results: tours.length,
            data:{
                tour:tours  //
            }
        });
    });
}

exports.updateTour = (req,res) => {

    res.status(200).json({
        status:'success',
        data:{   //didn't implement updating here as it is too much work, and none of database
            tour:'<Updated tour here...>'
        }
    });
}

exports.deleteTour = (req,res) => {

    res.status(204).json({  // usually don't sent any data back, use null instead
        status:'success',
        data:null
    });
}