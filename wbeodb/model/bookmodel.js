var con = require('../config/db');

var addBook = async(req , res , next ) => {

 // var {name , author} = req.body;
 
    let name = req.body.name;
    let author = req.body.author;

    console.log("name: ", name);
  

   


   
        try {
         const insertQuery = "INSERT INTO books (book_name, book_author) values($1, $2) RETURNING *";
         const result = await con.query(insertQuery, [name, author]);
         return result.rowCount;
        } catch (error) {
             throw error;
          }

  }
 
        
      
      











var showBook =   async () =>{

  
     

      const query = `
      SELECT * FROM   books ORDER BY book_id desc`;

    const runQuery = await con.query(query);
    if (runQuery.rows.length === 0) throw Error("No data found.");
    return runQuery.rows;

    
    
}


var detailBook =    async function(id){
   // console.log(id);
   try {
        console.log("gggg",id);
       
        var sql = `SELECT * FROM books WHERE book_id = ${id}`;

        const runQuery = await con.query(sql);

        if (runQuery.rows.length === 0) throw Error("No data found.");
        return runQuery.rows;
       
     
  

} catch (error) {
    throw Error(error.message);
  }
}

var delBook =   async function(req, res , id ){
    // console.log(id);
    try {
         console.log("del id",id);
        
         var sql = `delete  FROM books WHERE book_id = ${id}`;
 
         const runQuery = await con.query(sql);
 
      //  if (runQuery.rows.length === 0) throw Error("No data found.");
         return runQuery.rowCount;
      /*  res.status(200).json({
          message: "deleted",
        });       */
    
    } catch (error) {
        throw error;
      }
 }

 var editBook =    async function(req , res , next ){
    // console.log(id);
    try {
        

         let name = req.body.name;
         let author = req.body.author;
         let id = req.body.id;
    
        // var sql = `update  bookauthor  set nameb='kk' WHERE bookid = $1`;
 
        console.log("del id",id);
 
         //if (runQuery.rows.length === 0) throw Error("No data found.");
      //  return runQuery.rows;
      const updatedNote = await con.query("UPDATE books SET book_name = $1 , book_author = $2 WHERE book_id = $3", [name, author, id])
      

       /*con.query('UPDATE books SET book_name = $1 , book_author = $2 WHERE book_id = $3' , [name , author, id] , (error, results) => {
          if (error) {
              console.error(error);
             // res.status(500).send('Error updating user');
      } */
      //else {
         // res.status(200).send('User updated successfully');
     // }
  });
       
      
    
    } catch (error) {
      throw error;
      }
 }



module.exports = {
    addBook,
   showBook,
    detailBook,
    delBook,
    editBook,
    
}