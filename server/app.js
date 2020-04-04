const express = require('express');
const app = express();
const userRoutes = require("./routes/userRoutes")
const friendsRoute = require('./routes/friendsRoutes')

app.use(express.json())
app.use('/user', userRoutes)
app.use('/friends', friendsRoute)





//Run app, then load http://localhost:3000 in a browser to see the output.

module.exports = app;