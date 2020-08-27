const User = require("../models/user.model");


exports.create = (req, response) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        response.status(400).send({
            error: true,
            message: 'Required field'
        })
    }else{
        User.create(req.body, (err, user) => {
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

exports.update = (req, response) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        response.status(400).send({
            error: true,
            message: 'Required field'
        })
    }else{
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




