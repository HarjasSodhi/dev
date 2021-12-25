const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(express.static('public'));

app.use(express.json());


const authRouter = require('./Routers/authRouter')
const forgotPass = require('./Routers/forgotPass')
app.use('/auth', authRouter);
app.use('/forgot', forgotPass);


app.get('/', (req, res) => {
    console.log(req);
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    res.send('<h1>hello</h1>');
})

let user = []

// client <- server
app.get('/user', (req, res) => {
    res.json(user);
    res.end();
})

//important to send root
app.get('/fileExample', (req, res) => {
    res.sendFile("/public/index.html", { root: __dirname });
})

//post request
// client-> server
app.post('/user', (req, res) => {
    user = req.body;
    res.send("data added Succesfully");
})

app.patch('/user', (req, res) => {
    obj = req.body;
    for (let key in obj) {
        user[key] = obj[key];
    }
    res.json(user);
})

app.delete('/user', (req, res) => {
    user = {};
    res.json(user);
})

app.get('/home/:id', (req, res) => {
    let id = req.params;
    res.send(id);
})

//redirect
app.get('/user-all', (req, res) => {
    res.redirect('/user');
})

//404 page//should always be at end
app.use((req, res) => {
    res.send('<h1>Oops Page Not Found !!</h1>')
})

app.listen(port, () => {
    console.log("listening on port " + port);
});

