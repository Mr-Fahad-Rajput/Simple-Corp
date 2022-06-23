const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();


dotenv.config({path: './confiq.env'});
require('./database/connection');
const port = 5000;

const Users = require('./Models/userSchema');
const Message = require('./Models/msgSchema');
const authenticate = require('./middleware/authenticate');


app.use(express.json());
app.use(express.urlencoded({ extended : false}));
app.use(cookieParser());

// Registration
app.post('/register', async (req, res)=>{
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username : username,
            email : email,
            password : password
        });

        const created = await createUser.save();
        console.log( created + "was Created");
        res.status(200).send("Registered");

    } catch (error) {
        res.status(400).send(error)
    }
})


app.post('/login', async (req, res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        
        const user = await Users.findOne({email : email});
        if(user){
            
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
               
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials");
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

app.post('/message', async (req, res)=>{
    try {
        
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Message({
            name : name,
            email : email,
            message : message
        });

      
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Sent");

    } catch (error) {
        res.status(400).send(error)
    }
})


app.get('/logout', (req, res)=>{
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("User Logged Out")
})

app.get('/auth', authenticate, (req, res)=>{

})


app.get('/',(req,res) => {

    res.send("I Feel Good");
})

app.listen(port, ()=>{

    console.log("Server Listening...")
})