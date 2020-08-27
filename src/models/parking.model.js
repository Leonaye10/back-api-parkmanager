const sql = require("../connection-bdd");


const Parking = (parking) => {
    this.id_parking = parking.id_parking;
    this.etage = parking.etage;
    this.disponibilite = parking.disponibilite;
    this.temps_occupation = parking.temps_occupation;
    this.user_id = parking.user_id;
}


Parking.create = (parking, result) => {
    sql.query("INSERT INTO parking set ?", parking, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('parking : ', res.insertId);  
            result(null, res.insertId);
        }
    })
}

Parking.findAll = (result) => {
    sql.query("SELECT * FROM parking", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('parking : ', res);  
            result(null, res);
        }
    })
}

Parking.findById = (id, result) => {
    sql.query("SELECT * FROM parking WHERE id_parking = ?", id, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('parking : ', res);  
            result(null, res);
        }
    })
}

Parking.update = (id, parking, result) => {
    sql.query("UPDATE parking SET id_parking = ?, etage = ?, disponibilite = ?, temps_occupation = ?, user_id = ? WHERE id_parking = ?", 
                [parking.id_parking, parking.etage, parking.disponibilite, parking.temps_occupation, parking.user_id, id], (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('parking : ', res);  
            result(null, res);
        }
    })
}

Parking.delete = (id, result) => {
    sql.query("DELETE FROM parking WHERE id_parking = ?", id, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('parking : ', res);  
            result(null, res);
        }
    })
}


module.exports = Parking;