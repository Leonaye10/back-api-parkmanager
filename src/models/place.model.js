const sql = require("../connection-bdd");


const Place = (place) => {
    this.id_place = place.id_place;
    this.etage = place.etage;
    this.disponibilite = place.disponibilite;
    this.temps_occupation = place.temps_occupation;
    this.user_id = place.user_id;
}


Place.create = (place, result) => {
    sql.query("INSERT INTO place set ?", place, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('place : ', res.insertId);  
            result(null, res.insertId);
        }
    })
}

Place.findAll = (result) => {
    sql.query("SELECT * FROM place", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('place : ', res);  
            result(null, res);
        }
    })
}

Place.findById = (id, result) => {
    sql.query("SELECT * FROM place WHERE id_place = ?", id, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('place : ', res);  
            result(null, res);
        }
    })
}

Place.update = (id, place, result) => {
    sql.query("UPDATE place SET etage = ?, disponibilite = ?, temps_occupation = ?, user_id = ? WHERE id_place = ?", 
                [place.etage, place.disponibilite, place.temps_occupation, place.user_id, id], (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('place : ', res);  
            result(null, res);
        }
    })
}

Place.delete = (id, result) => {
    sql.query("DELETE FROM place WHERE id_place = ?", id, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('place : ', res);  
            result(null, res);
        }
    })
}

Place.findByEtage = (etage, result) => {
    sql.query("SELECT * FROM place WHERE etage = ? and disponibilite = true", etage, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('place : ', res);  
            result(null, res);
        }
    })
}

Place.findByUserId = (id, result) => {
    sql.query("SELECT * FROM place p JOIN user u WHERE p.user_id = u.id_user and id_user = ?", id, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('place : ', res);  
            result(null, res);
        }
    })
}


Place.assigner = (id, place, result) => {
    sql.query("UPDATE place SET disponibilite = false, temps_occupation = ?, user_id = ? WHERE id_place = ?", 
                [place.temps_occupation, place.user_id, id], (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('place : ', res);  
            result(null, res);
        }
    })
}

Place.deAssigner = (id, result) => {
    sql.query("UPDATE place SET disponibilite = true, temps_occupation = NULL, user_id = NULL WHERE id_place = ?", 
                id, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('place : ', res);  
            result(null, res);
        }
    })
}


module.exports = Place;