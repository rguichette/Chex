const express = require('express');
const app = express();
const userRoutes = require("./routes/userRoutes")

app.use(express.json())
app.use('/user', userRoutes)





//Run app, then load http://localhost:3000 in a browser to see the output.

module.exports = app;