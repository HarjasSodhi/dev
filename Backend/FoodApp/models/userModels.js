const mongoose = require('mongoose');
const db_link = 'mongodb+srv://harjas:vv0qavUktirpbHRB@cluster0.6a9qd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const validator = require("email-validator");

mongoose.connect(db_link).then(() => {
    console.log('db connected');
}).catch((err) => {
    console.log(err);
});

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        validate: function () {
            return validator.validate(this.email);
        }
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    confirmPassword: {
        type: String,
        required: true,
        min: 8,
        validate: function () {
            return this.password == this.confirmPassword
        }
    },
    createdAt: {
        type: String
    }
});
userSchema.pre('save', function () {
    this.confirmPassword = undefined;
})
const userModel = mongoose.model('userModel', userSchema);
module.exports = userModel;
//immediate invoked function
// (async function createUser() {
//     let user = {
//         name: 'harjas',
//         age: 20,
//         email: 'abc@gmail.com',
//         password: '12345678',
//         confirmPassword: '12345678'
//     };
//     let userObj = await userModel.create(user);
//     console.log(userObj);

// })();