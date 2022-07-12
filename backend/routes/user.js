const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/login', userCtrl.login);
router.post('/register', userCtrl.register);
router.post('/user', auth, userCtrl.EditUser);

module.exports = router;