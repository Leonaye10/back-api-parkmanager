const Place = require("../models/place.model");
const { response } = require("express");


exports.create = (req, response) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        response.status(400).send({
            error: true,
            message: 'Required field'
        })
    }else{
        Place.create(req.body, (err, place) => {
            if(err){
                response.send(err);
            }
            response.json({
                error: false,
                message: 'place add successfully',
                data: place
            })
        })
    }
}


exports.findAll = (req, response) => {
    Place.findAll((err, place) => {
        if(err){
            response.send(err);
        }
        console.log('response', place);
        response.send(place);
    })
}

exports.findById = (req, response) => {
    Place.findById(req.params.id,(err, place) => {
        if(err){
            response.send(err);
        }
        console.log('response', place);
        response.send(place);
    })
}

exports.findByEtage = (req, response) => {
    Place.findByEtage(req.params.etage, (err, place) => {
        if(err){
            response.send(err);
        }
        console.log('response', place);
        response.send(place);
    })
}

exports.findByUserId = (req, response) => {
    Place.findByUserId(req.params.id, (err, place) => {
        if(err){
            response.send(err);
        }
        console.log('response', place);
        response.send(place);
    })
}

exports.update = (req, response) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        response.status(400).send({
            error: true,
            message: 'Required field'
        })
    }else{
        Place.update(req.params.id, req.body, (err, place) => {
            if(err){
                response.send(err);
            }
            response.json({
                error: false,
                message: 'place successfully update',
                data: place
            })
        })
    }
}

exports.assigner = (req, response) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        response.status(400).send({
            error: true,
            message: 'Required field'
        })
    }else{
        Place.assigner(req.params.id, req.body, (err, place) => {
            if(err){
                response.send(err);
            }
            response.json({
                error: false,
                message: 'place successfully attribute to user',
                data: place
            })
        })
    }
}

exports.deAssigner = (req, response) => {

    Place.deAssigner(req.params.id, (err, place) => {
        if(err){
            response.send(err);
        }
        response.json({
            error: false,
            message: 'place successfully remove for user',
            data: place
        })
    })
    
}

exports.delete = (req, response) => {
    Place.delete(req.params.id,(err, place) => {
        if(err){
            response.send(err);
        }
        console.log('response', place);
        response.send(place);
    })
}




