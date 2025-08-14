var bookModel= require('../Model/bookModel');
exports.createUser = async (req, res) => {
    try {
        await bookModel.createUser(req, res);
       /* res.json({
            "message": "User Created"
        });*/
    } catch (error) {
        res.json({ message: error.message });
    }  
}


exports.allUserRecord = async (req, res) =>{
    try {
       await bookModel.getUsers(req, res);
     //console.log("test"+users);
     // console.log(res.json(users));
    // res.json(users);
        
       
    } catch (error) {
       //res.json({ message: error.message });
      // console.error(error.message);
       return response.status(500).json({ message: 'Internal server error' });
       console.error(" error Message:"+error.message);
            
       
    }  
}
exports.deleteUserRecord = async (req, res) => {
    try {
       await bookModel.deleteUser(req, res);
     //console.log("test"+users);
     // console.log(res.json(users));
    // res.json(users);
        
       
    } catch (error) {
       //res.json({ message: error.message });
      // console.error(error.message);
       return response.status(500).json({ message: 'Internal server error' });
       console.error(" error Message:"+error.message);
            
       
    }  
}

exports.getUser = async (req, res) => {
    try {
        console.log("test");
       await bookModel.getUserById(req, res);
     //console.log("test"+users);
     // console.log(res.json(users));
    // res.json(users);
        
       
    } catch (error) {
       //res.json({ message: error.message });
      // console.error(error.message);
       return res.status(500).json({ message: 'Internal server error' });
       console.error(" error Message:"+error.message);
            
       
    }  
}



exports.updateUser = async (req, res) => {
    try {
       await bookModel.updateUserRecord(req, res);
     
     // console.log(res.json(users));
    // res.json(users);
        
       
    } catch (error) {
       //res.json({ message: error.message });
      // console.error(error.message);
       return response.status(500).json({ message: 'Internal server error' });
       console.error(" error Message:"+error.message);
            
       
    }  
}


//https://blog.stackademic.com/creating-a-beginner-friendly-crud-api-using-node-js-express-and-mysql-2d292ca8b4b
//https://www.scaler.com/topics/expressjs-tutorial/express-js-mysql-crud/
//https://www.atatus.com/blog/building-crud-rest-api-with-node-js-express-js-and-postgresql/
//https://webbaliseo.com/en/crud-tutorial-using-node-js-react-js-express-and-mysql/
//https://www.javaguides.net/2020/07/spring-boot-react-js-crud-example-tutorial-react-app-frontend-part2.html
//https://github.com/bezkoder/react-js-login-registration-hooks/blob/master/src/services/auth.service.js