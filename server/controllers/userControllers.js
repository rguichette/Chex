
// console.log("hi");

module.exports.updateMe = (req, res, next) =>{
    console.log('updating user');
     res.json({status:'success'});
    next()
    
}