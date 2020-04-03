//init everything server related here 
console.log("hey");

const app = require('./app')

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});


