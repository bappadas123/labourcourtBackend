var express = require('express');
var router = express.Router();
var bookcontroller = require('../Controller/bookController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/useradd',  bookcontroller.createUser);
router.get('/alluser',  bookcontroller.allUserRecord);
router.delete('/deleteuser/:id',  bookcontroller.deleteUserRecord);
router.get('/getuser/:id', bookcontroller.getUser);
router.patch('/updateuser/:id', bookcontroller.updateUser);
module.exports = router;
