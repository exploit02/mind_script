var express = require('express');
var router = express.Router();






const User = require('./../models/users')





/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
 console.log('=====================================')










  res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

router.post('/', (req, res, next)=>{

  const user = new User({
    fname: req.body.fname, 
    lname: req.body.lname, 
    email: req.body.email, 
    password: req.body.password
  });



  user.save()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the Note."
      });
  });




  console.log(req.body)
  
})

module.exports = router;
