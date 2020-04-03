var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
   first_name: {
       type: String,
       required: true
   },
   last_name: {
       type: String, 
       required: true
   }, 
   active:{
       type: Boolean, 
       default: true
   }

  });

  const User = mongoose.model("User", userSchema);

  module.exports = User


