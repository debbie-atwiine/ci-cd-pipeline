const express = require('express');
const router = express.Router();
const Index = require('../models/indexModel');

router.get('/studentstable', async(req,res)=>{
     
    try {
        // helps return all the members in the collection clients
        const data = await Index.find({}).sort({$natural:-1});
            res.render('retrieve', {
            indexs : data
          
        })
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Oops failed to fetch all student registrations from DB',
            error
          });
    }
});

module.exports = router;
