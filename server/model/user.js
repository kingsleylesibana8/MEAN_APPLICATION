// var mongoose = require('mongoose');
// var Schema = mongoose.Schema
// var mongooseUniqueValidator = require('mongoose-unique-validator');

// var userSchema = new Schema({
//   username: { type: String, required: true, unique: true },
//   lastname: { type: String, required: true, unique: true },
//   email: { type: String, index: true, unique: true, required: true },
//   password: { type: String, required: true }
// });

// userSchema.plugin(mongooseUniqueValidator);
// module.exports = mongoose.model('User',userSchema);

var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// Define your schema as normal.
var userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, index: true, unique: true, required: true },
    lastname: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);
users = mongoose.model('users', userSchema);                                                                                                               
module.exports = users;  