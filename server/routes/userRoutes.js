const express = require('express');
const router = express.Router();

const userController = require("../controllers/userControllers")


router.get('/', userController.updateUser);

module.exports = router;