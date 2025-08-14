var express = require('express');
var router = express.Router();
var listcontroller = require('../Controller/listController');
router.get('/AllDistrictApi',  listcontroller.shopDistrictRecord);
router.get('/getshopSubdivision/:district_id', listcontroller.getDistrictSubdiv);

module.exports = router;