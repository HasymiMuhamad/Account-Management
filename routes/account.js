const accountController = require('../controllers/account');
const express = require('express');
const apps = express(); 
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth')



// router.get('/test/test',  accountController.accountTest);

router.post('/login',  accountController.accountLogin);

router.post('/register', accountController.accountCreate);

// router.post('/register/parents', accountController.accountCreate);

// router.post('/register/doe', accountController.accountCreate);

// router.post('/register/schoolAdmin', accountController.accountCreate);

// router.post('/register/appsAdmin', accountController.accountCreate);

// router.put('/:id', auth.isAuthenticated, accountController.accountUpdate);

// router.delete('/:id', auth.isAuthenticated, accountController.accountDelete);

// router.get('/', auth.isAuthenticated, accountController.accountDetailsAll);

// router.get('/:id', auth.isAuthenticated, accountController.accountDetails);

module.exports = router;



