var express = require('express');
var path = require('path');

var app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes');
require('./app/routing/htmlRoutes');

app.listen(PORT, () =>{
  console.log(`app listening on PORT ${PORT}`);
});