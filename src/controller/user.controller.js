const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, response) => {    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        response.status(400).send({
            error: true,
            message: 'Required field'
        })
    }else{
        const plainPassword = req.body.password;
        const hashedPassword = await bcrypt.hash(plainPassword, 10);
        req.body.password = hashedPassword;
        User.register(req.body, (err, user) => {
            if(err){
                response.send(err);
            }
            response.json({
                error: false,
                message: 'User add successfully',
                data: user
            })
        })
    }
}

exports.findAll = (req, response) => {
    User.findAll((err, user) => {
        if(err){
            response.send(err);
        }
        console.log('response', user);
        response.send(user);
    })
}

exports.findById = (req, response) => {
    User.findById(req.params.id,(err, user) => {
        if(err){
            response.send(err);
        }
        console.log('response', user);
        response.send(user);
    })
}

exports.login = async (req, response) => {
    const { email, password } = req.body;    
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        response.send({
            error: true,
            message: 'Required field'
        })
    }else{
        User.login(req.body.email, async (err, user) => {
            if(err){
                response.send(err)
            }else{
                if(user.length > 0){
                    const match = await bcrypt.compare(password, user[0].password);
                    console.log("Mot de passe coorespondent? : ", match);
                    if(match){
                        const token = jwt.sign({id: user.id_user, role: user.role}, "mySecretKey", {expiresIn: "60m"})
                        response.json({
                            error: false,
                            message: "Successfuly authentificated",
                            token
                        })
                    }else{
                        response.status(400).send({
                            error: true,
                            message: "Email or Password does not exists"
                        })
                    }
                    
                }else{
                    console.log("Email or Password incorrect!!!");
                    response.send({
                        error: true,
                        message: "Email or Password does not exists"
                    })
                }
                
            }           
        })
    }
}

exports.update = async (req, response) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        response.status(400).send({
            error: true,
            message: 'Required field'
        })
    }else{
        const plainPassword = req.body.password;
        const hashedPassword = await bcrypt.hash(plainPassword, 10);
        req.body.password = hashedPassword;
        User.update(req.params.id, req.body, (err, user) => {
            if(err){
                response.send(err);
            }
            response.json({
                error: false,
                message: 'User successfully update'
            })
        })
    }
}

exports.delete = (req, response) => {
    User.delete(req.params.id,(err, user) => {
        if(err){
            response.send(err);
        }
        console.log('response', user);
        response.send(user);
    })
}




