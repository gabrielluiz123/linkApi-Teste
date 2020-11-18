const express = require("express");
const router = express.Router();
const dealMiddleware = require("../services/get_deal");


const login = require('../middleware/login');

router.get('/getDeals', login, dealMiddleware);


module.exports = router;