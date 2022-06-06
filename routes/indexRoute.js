const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');

router.use(expressValidator());

//requiring the model so that it can be used
const Index = require('../models/indexModel');


//route for accessing/viewing the signup page
router.get('/index', (req, res) => {
   
    res.render('index')
});

//route for the post method
router.post('/index', (req, res) => {
    //declare variables that correspond to the names of the different input fields in the form
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const tel = req.body.tel
    const address = req.body.address
    const cohort = req.body.cohort

    //Handling errors
    const errors = req.validationErrors()
    if (errors) {
        res.render('index')
    }
    else {
        let newIndex = new Index({
            //property(as used in the schema): value(as used in the form as the name of the input type)
            firstname: firstname,
            lastname : lastname,
            email : email,
            tel : tel,
            address : address,
            cohort : cohort
        });


        //saving the model
        newIndex.save((err) => {
            if (err) {
                console.error(err)
                return;
            }
            else {
                console.log('You have saved your data to the database')
                res.redirect('/studentstable')
            }
        })

    }


});

//exposing the route to any file that will need to access it
module.exports = router;