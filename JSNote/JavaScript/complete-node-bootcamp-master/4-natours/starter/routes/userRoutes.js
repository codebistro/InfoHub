const express = require('express');
const userController = require(`./../controlllers/userController`);

const router = express.Router();//middware function refer to express router function

router
    .route('/')
    .get(userController.getAllUsers)//read
    .post(userController.createUser)//create

router
    .route('/:id')
    .get(userController.getUser)//read
    .patch(userController.updateUser)//update
    .delete(userController.deleteUser)//delete

module.exports = router;