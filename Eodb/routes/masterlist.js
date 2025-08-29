var express = require('express');
var router = express.Router();
var listcontroller = require('../Controller/listController');
router.get('/AllDistrictApi',  listcontroller.shopDistrictRecord);
router.get('/getshopSubdivision/:district_id', listcontroller.getDistrictSubdiv);
router.get('/getshopPoliceStation/:district_id', listcontroller.getDistrictPoliceStation);
router.get('/getshopPostOffice/:district_id', listcontroller.getDistrictPostOffice);

module.exports = router;