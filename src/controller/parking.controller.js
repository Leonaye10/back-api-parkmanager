const Parking = require("../models/parking.model");


exports.create = (req, response) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        response.status(400).send({
            error: true,
            message: 'Required field'
        })
    }else{
        Parking.create(req.body, (err, parking) => {
            if(err){
                response.send(err);
            }
            response.json({
                error: false,
                message: 'parking add successfully',
                data: parking
            })
        })
    }
}


exports.findAll = (req, response) => {
    Parking.findAll((err, parking) => {
        if(err){
            response.send(err);
        }
        console.log('response', parking);
        response.send(parking);
    })
}

exports.findById = (req, response) => {
    Parking.findById(req.params.id,(err, parking) => {
        if(err){
            response.send(err);
        }
        console.log('response', parking);
        response.send(parking);
    })
}

exports.update = (req, response) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        response.status(400).send({
            error: true,
            message: 'Required field'
        })
    }else{
        Parking.update(req.params.id, req.body, (err, parking) => {
            if(err){
                response.send(err);
            }
            response.json({
                error: false,
                message: 'parking successfully update'
            })
        })
    }
}

exports.delete = (req, response) => {
    Parking.delete(req.params.id,(err, parking) => {
        if(err){
            response.send(err);
        }
        console.log('response', parking);
        response.send(parking);
    })
}




