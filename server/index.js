//init everything server related here 
console.log("hey");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true}, () =>{
   console.log("connected to db");
    
});


const app = require('./app')

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});


