const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
const clientController = require('../controllers/clientController');
const { urlencoded } = require('express');

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/validate', userController.checkToken)
router.post('/create',  clientController.registerClient)

module.exports = router
// urlencoded({extended: true}),