const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidate = require('express-validator');
const session = require('express-session');
const passport = require('passport');

//requiring the database
const config = require('./config/database');


//requiring routes
const signup = require('./routes/signupRoute');
const login = require('./routes/loginRoute');
const index = require('./routes/indexRoute');
const studenttable = require('./routes/retrieveRoute');


//instantiating the server/server/index
const server = express();

//creating a connection to the mongo database from the controller(specifying its location)
mongoose.connect(config.database);
const db = mongoose.connection;
db.once('open', ()=> {
    console.log('Connected to mongodb')
});
db.on('error', (err)=> {
    console.error(err)
}); 

//setting up the view engine
server.engine('pug', require('pug').__express);
server.set('view engine', 'pug');
server.set('views', path.join(__dirname, 'views'));

//body parser middle ware section
server.use(bodyParser.urlencoded({
    extended:false
}));

server.use(bodyParser.json());


//setting the directory for static files
server.use(express.static(path.join(__dirname, "public")));

//express session middle ware
server.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
    //the above keeps track of the different users that have successfully accessed the system according to their sessions.
}));

//password configuration
require('./config/passport')(passport);

//passport middle ware
server.use(passport.initialize());
server.use(passport.session());
//* means all. 
server.get('*', (req, res, next) => {
    res.locals.user = req.user || null;
    next();
});


//the route section
server.use('/', signup);
server.use('/', login);
server.use('/', index);
server.use('/', studenttable);

//establish the server listening port
server.listen(4000, ()=> {
    console.log('The server has started on port 4000')
})