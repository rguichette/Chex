const User = require('../models/userModel');

//this automatically signs user in 
module.exports.signUp = (req, res, next) =>{
    console.log(req.body);
    

    let newUser = User(req.body).save().then(()=>{
        console.log("posted");
        
    }).catch(err =>{
        console.log(err);
        
    })
    console.log("creating user... ");
    res.send("hi");
    next()
    
}



//login 

//signout
 module.exports.signout = (req, res, next) =>{
     res.send('signing out...')

 }