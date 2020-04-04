var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
      email: {
type: String, 
unique: true, 
required: true
      }, 
   first_name: {
       type: String,
       required: true
   },
   last_name: {
       type: String, 
       required: true
   }, 
   num_of_friends:{
       type: Number, 
       default: 0
   }, 
   friends: [Object], 
   friend_requests: [{ type: Schema.Types.ObjectId, ref: 'FriendRequest'}], 

   active:{
       type: Boolean, 
       default: true
   }

  });

  const User = mongoose.model("User", userSchema);

  module.exports = User


