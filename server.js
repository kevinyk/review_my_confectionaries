let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public/dist'));

mongoose.connect('mongodb://localhost/rate_cakes');

require('./server/config/mongoose');
let routes_setter = require('./server/config/routes');
routes_setter(app);

app.listen(8000, function(){
    console.log('on port 8000');
})