const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;



var userSchema = require('../model/user');

// Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/application', (err, db) => {
    if (err) return console.log(err);
    closure(db);
  });
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: "Success"
};

// Register User
router.post('/register', (req, res) => {
  var userModel = new userSchema({
    username : req.body.username,
    lastname : req.body.lastname,
    email : req.body.email,
    password : req.body.password
  })
  connection((db) => {
    db.collection('users')
      .insert(userModel)
      .then((users) => {
        response.data = users
        res.json(response);
        console.log('User Saved!!!')
      })
      .catch((err) => {
        sendError(err, res);
      });
  });



});

router.get('/users', (req, res) => {
  connection((db) => {
    db.collection('users')
      .find()
      .toArray()
      .then((users) => {
        response.data = users
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

router.post('/signin',(req,res)=> {
  connection((db) => {
    db.collection('users').findOne({ username: req.body.username}, function(err, user) {
      console.log('User found ');
      // In case the user not found
      if(err) {
        console.log('THIS IS ERROR RESPONSE')
        res.json(err)
      }

      if (user && user.password === req.body.password){
        console.log('User and password is correct')
        res.json(user);
      } else {
        console.log("Credentials wrong");
        res.json({data: "Login invalid"});
      }
    });

  });
});

module.exports = router;
