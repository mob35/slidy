'use strict'
let expressPath =  require('./config/express');
let express =  require('express');
let app =  expressPath();
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 8881);
console.log("Server is running http://localhost:8881");