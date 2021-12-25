const express = require('express');
const forgotPass = express.Router();

let getForgotPassPage = (req, res) => {
    res.sendFile("/public/forgetPassword.html", { root: __dirname });
}

let setForgotPass = (req, res) => {
    let newPass = req.body.password;
    console.log(newPass);
    res.send(req.body);
}

let NewPassValidator = (req, res, next) => {//this function behaves as a middleWare and next function is used to continue the control to next function
    let email = req.body.email.split('');
    if (email.includes('@') && email.includes('.')) {
        next();
    }
    else {
        res.send('error');
    }
}


forgotPass.route('/forgotpassword')
    .get(getForgotPassPage)
    .post(NewPassValidator, setForgotPass)


module.exports = forgotPass;