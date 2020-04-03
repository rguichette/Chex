
// console.log("hi");

module.exports.updateUser = (req, res, next) =>{
    console.log('updating user');
     res.json({status:'success'});
    next()
    
}