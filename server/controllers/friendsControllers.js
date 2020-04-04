//requesting to friend
module.exports.friendRequest = (req, res, next) =>{

res.json({
    status: "success", 
    massage: "request sent"
})
}
//accepting friend
module.exports.acceptFriend = (req, res, next) =>{
res.json({
    status: "success", 
    massage: "accepted friend request"
})
}

module.exports.declineFriend = (req, res, next) =>{
res.json({
    status: "success", 
    massage: "declined friend request"
})
}


//view all friends
module.exports.viewFriends = (req, res, next) =>{
res.json({
    status: "success", 
    massage: "viewing all friends"
})
}

//view single friend
module.exports.viewFriend = (req, res, next) =>{
res.json({
    status: "success", 
    massage: "viewing friend"
})
}

module.exports.deleteFriend = (req, res, next) =>{
res.json({
    status: "success", 
    massage: "friend deleted"
})
}