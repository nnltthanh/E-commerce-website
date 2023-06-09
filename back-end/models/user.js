const mongoose = require('mongoose');
// const validator = require('validator');

const User = new mongoose.Schema({
    username: 
    {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    }, 
    email:
    {
        type: String,
        lowercase: true,
        // validate: {
        //     validator: () => Promise.resolve(false),
        //     message: 'Không thể xác minh email'
        //   }
    },
    password:
    {
        type: String,
        required: true,
    },  
    roles: String,
});


module.exports = mongoose.model('User', User);

const User1 = mongoose.model('User', User);
const user1 = new User1();
user1.username = 'modulus admin'
user1.email = "thanh@gmail.com"
user1.roles="admin"
user1.password="thanh"
console.log(user1)
user1.save()

