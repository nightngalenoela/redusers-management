const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');

// Set Port
const port = 3000;

// Init app
const app = express();

// View Engine 
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebares');

// body-parser
// parse application/x-www-form-urlencoded
app.use(express.urlencoded());

// parse application/json
app.use(express.json({extended: false}));

//methodOverride
app.use(methodOverride('_method'));

app.get('/', function(req, res, next){
    res.render('searchusers');
});

app.listen(port, function(){
    console.log('Server started on port '+port);
});