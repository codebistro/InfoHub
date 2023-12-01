const express = require('express');
const tourController = require(`./../controlllers/tourController`);
const router = express.Router();//middware function refer to express router function
//it is kind of convention call this router instead tourRouter
//app.use('/api/v1/tours',router) 相当于使用此中间件

router.param('id',tourController.checkID)
//Basically router.param() function triggers the callback function whenever user routes to the parameter.
//
router// the following all begin with '/', we could use chain format after using route， 也可以通过app.route()调用，如果没有引入中间件的话。
    .route('/')
    .get(tourController.getAllTours)//read
    .post(tourController.checkBody, tourController.createNewTour)//create
    //app.post(path, callback [, callback ...])
    //     Callback: Callback functions can be:
    // A middleware function.
    // A series of middleware functions (separated by commas).
    // An array of middleware functions.
    // A combination of all of the above.

router// the following all begin with '/:id'
    .route('/:id')//    define a variable with colon => /:id , we also could define more continully like => /:id/:x/:y, if optional parameters, we could add ? after it  /:id/:x/:y?  then, y is not necssary
    .get(tourController.getTour)//read
    .patch(tourController.updateTour)//update
    .delete(tourController.deleteTour)//delete

module.exports = router;
//自定义模块中都有一个module对象，存储了和当前模块有关的信息
//使用module.exports将模块内的成员共享出去， 供外界使用。
//导入自定义模块的时候，得到的就是module.export指向的对象
//默认情况下，module.exports 是一个空对象{}