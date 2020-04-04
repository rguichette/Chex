const express = require('express');
const router = express.Router();

const friendControllers = require('../controllers/friendsControllers')

//get list of fiends
router.get('/', friendControllers.viewFriends);

router.post("/accept_friend/:id", friendControllers.acceptFriend);
//get single friend
router.get('/:id', friendControllers.viewFriend)

//takes in an of who friend request is being sent to 
router.post('/friend_request/:id', friendControllers.friendRequest)


router.post('/decline_friend/:id',friendControllers.declineFriend)
module.exports = router