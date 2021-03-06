const express = require('express');
const router = express.Router();
const passport = require('passport');

//accessing the login page
router.get('/login', (req, res) => {
    res.render('login')
});

//defining the route for processing the data from the login form
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        //this is the route for the page after successfully logging in
        successRedirect: '/index',

        //incase of failure remain on login
        failureRedirect: '/login'

        })
        //'next' allows the next process to be executed
        (req, res, next);
} );

module.exports = router;