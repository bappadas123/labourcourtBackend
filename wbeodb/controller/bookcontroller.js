var bookModel= require('../model/bookmodel');
var con = require('../config/db');


exports.bookDetailAdd =  async (req, res, next) => {
  try {
//var result=  await bookModel.addBook();

 
 res.render('bookadd');
} catch (e) {
console.log("error: ", e);
}
}
exports.addBookDetail =  async (req, res, next) => {
  try {
var result2=   await bookModel.addBook(req, res, next);

console.log("result2: ", result2);
var result=  await bookModel.showBook();

console.log("result: ", result);
res.render('bookshow',{"data":result});
} catch (e) {
console.log("error: ", e);
}
}

exports.fetchBook =  async (req, res, next) => {
    try {
  var result=  await bookModel.showBook();

   
  //res.render('bookshow', {data: result.rows});
  res.render('bookshow',{"data":result});
} catch (e) {
  console.log("error: ", e);
  }
}

exports.editBook =  async (req, res, next) => {

  try {
    let id = req.params.bookid;
    console.log(`the book iid is ${id}`);
    var result=  await bookModel.detailBook(id);


    res.render('editbook', {
      title: 'Edit Student', 
      errors :'',
      id: result[0].book_id,
      book_name: result[0].book_name,
      book_author: result[0].book_author
                      
  });

   
    console.log(result);

  } catch (e) {
    console.log("error: ", e);
  }
}




exports.bookDelete =  async (req, res, next) => {
  //let t = await sequelize.transaction({autocommit:false});
  try {
   
   
   
  
 
     
     
      
      let id = req.params.bookid;
      //console.log(`the delete book iid is ${id}`);
      var result=  await bookModel.delBook(req, res , id );
      console.log(result);

    
      var result3=  await bookModel.showBook();

console.log("result3: ", result);
res.render('bookshow',{"data":result3});

      //console.log(result2);
    } catch (e) {
      console.log( 'f1');
     
      throw e;
    } 

    console.log( 'suuuussssssss');
 
 } 

 exports.updateBook =  async (req, res, next) => {
  try {
var result2=   await bookModel.editBook(req, res, next);

console.log("result2: ", result2);
var result=  await bookModel.showBook();

console.log("result: ", result);
res.render('bookshow',{"data":result});
} catch (e) {
console.log("error: ", e);
}
}
