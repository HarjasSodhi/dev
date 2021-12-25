const express = require('express');
const userModel = require('../models/userModels');
const authRouter = express.Router();
const userModule = require('../models/userModels');
const jwt = require('jsonwebtoken');
const JWT_Key = 'jdbvfwbkvnasldnv344'
const sendMailNode = require('../Nodemailer');

let signUp = async (req, res) => {
    // let userDetails = req.body;
    // let { email, name, password } = userDetails;
    // user.push({
    //     email, name, password
    // })
    // res.send({
    //     message: "added",
    //     user: {
    //         email, name, password
    //     }
    // });
    try {
        let userObj = req.body;
        let user = await userModule.create(userObj);
        console.log('user', user);
        sendMailNode(userObj);
        res.json({
            message: 'user signedUp',
            user: userObj
        });
    }
    catch (err) {
        console.log(err);
        res.json({ message: err.message })
    }
}

let addCreatedAt = (req, res, next) => {
    let obj = req.body;
    let length = Object.keys(obj).length;
    if (length == 0) return res.status(400).json({ message: "error" });
    req.body.createdAt = Date.toString();
    next();
}


let userLogin = async (req, res) => {
    try {
        if (req.body.email) {
            let exists = await userModel.findOne({ email: req.body.email });
            if (exists) {
                if (exists.password == req.body.password) {
                    let payload = exists['_id'];
                    let token = jwt.sign({ id: payload }, JWT_Key);
                    res.cookie('login', token, { httpOnly: true });
                    return res.json({ meassage: "user logged in" });
                }
                else {
                    return res.json({ message: "Password or email is wrong" });
                }
            }
            else {
                return res.json({ message: "user does not exist" });
            }
        }
        else {
            return res.status(400).json({ message: "fill all fields" })
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

let getUsers = async (req, res) => {
    try {
        let users = await userModel.find();
        if (users) {
            return res.json({ users })
        }
        else {
            return res.json({ message: "no users found" })
        }
    }
    catch (err) {
        return res.json({ message: err.message })
    }
}

let checkLoginStatus = (req, res, next) => {
    try {
        if (req.cookies.login) {
            let verify = jwt.verify(req.cookies.login, JWT_Key);
            if (verify) {
                next();
            }
            else {
                res.json({ message: "please login first" })
            }
        }
        else {
            res.json({
                message: "operation not allowed"
            });
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

authRouter.route('/signup')
    .post(addCreatedAt, signUp)

authRouter.route('/login')
    .post(userLogin)

authRouter.route('/getUsers')
    .get(checkLoginStatus, getUsers);

module.exports = authRouter;