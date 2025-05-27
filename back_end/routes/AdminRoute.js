const express = require('express');
const router = express.Router();

const AdiminController = require('../controller/AdminController');


router.post('/login', AdiminController.login);

module.exports = router;