
var shopModel= require('../Model/shopModel');
exports.shopDistrictRecord = async (req, res) =>{
    try {
       await shopModel.getDistrict(req, res);
     //console.log("test"+users);
     // console.log(res.json(users));
    // res.json(users);
        
       
    } catch (error) {
       //res.json({ message: error.message });
       console.error(error.message);
       return res.status(500).json({ message: 'Internal server error' });
       console.error(" error Message:"+error.message);
            
       
    }  
}

exports.getDistrictSubdiv = async (req, res) => {
    try {
        console.log("test");
       await shopModel.getSubdivision(req, res);
     //console.log("test"+users);
     // console.log(res.json(users));
    // res.json(users);
        
       
    } catch (error) {
       //res.json({ message: error.message });
       console.error(error.message);
       return res.status(500).json({ message: 'Internal server error' });
       console.error(" error Message:"+error.message);
            
       
    }  
}

exports.getDistrictSubdiv = async (req, res) => {
    try {
        console.log("test");
       await shopModel.getSubdivision(req, res);
     //console.log("test"+users);
     // console.log(res.json(users));
    // res.json(users);
        
       
    } catch (error) {
       //res.json({ message: error.message });
       console.error(error.message);
       return res.status(500).json({ message: 'Internal server error' });
       console.error(" error Message:"+error.message);
            
       
    }  
}
exports.getDistrictPoliceStation = async (req, res) => {
    try {
        console.log("test");
       await shopModel.getPolicestation(req, res);
     //console.log("test"+users);
     // console.log(res.json(users));
    // res.json(users);
        
       
    } catch (error) {
       //res.json({ message: error.message });
       console.error(error.message);
       return res.status(500).json({ message: 'Internal server error' });
       console.error(" error Message:"+error.message);
            
       
    }  
}

exports.getDistrictPostOffice = async (req, res) => {
    try {
        console.log("test");
       await shopModel.getPostOffice(req, res);
     //console.log("test"+users);
     // console.log(res.json(users));
    // res.json(users);
        
       
    } catch (error) {
       //res.json({ message: error.message });
       console.error(error.message);
       return res.status(500).json({ message: 'Internal server error' });
       console.error(" error Message:"+error.message);
            
       
    }  
}


