var express = require('express');
var router = express.Router();
var bookcontroller = require('../controller/bookcontroller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');

  res.render('index', { title: 'Admin Dashboard' });

});

router.get('/home', function(req, res, next) {
  res.json({ message: "NodeJs CRUD Application" });
});

router.post('/bookadd',  bookcontroller.addBookDetail);
router.get('/addBookDetails',  bookcontroller.bookDetailAdd);
router.get('/bookEdit/:bookid',  bookcontroller.editBook);
router.get('/bookDelete/:bookid',  bookcontroller.bookDelete);
router.get('/bookshow',  bookcontroller.fetchBook);
router.post('/bookupdate',  bookcontroller.updateBook);


module.exports = router;
