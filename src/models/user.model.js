const sql = require("../connection-bdd");


const User = (user) => {
    this.id_user = user.id_user;
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
    this.role = user.role;
}


User.register = (user, result) => {
    sql.query("INSERT INTO user set ?", user, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('user : ', res.insertId);  
            result(null, res.insertId);
        }
    })
}

User.findAll = (result) => {
    sql.query("SELECT * FROM user", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('user : ', res);  
            result(null, res);
        }
    })
}

User.findById = (id, result) => {
    sql.query("SELECT * FROM user WHERE id_user = ?", id, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('user : ', res);  
            result(null, res);
        }
    })
}

User.login = (email, result) => {
    sql.query("SELECT * FROM user WHERE email = ?", email, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('user : ', res);  
            result(null, res);
        }
    })
}

User.update = (id, user, result) => {
    sql.query("UPDATE user SET name = ?, password = ?, email = ?, role = ? WHERE id_user = ?", 
                [user.name, user.password, user.email, user.role, id], (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('user : ', res);  
            result(null, res);
        }
    })
}

User.delete = (id, result) => {
    sql.query("DELETE FROM user WHERE id_user = ?", id, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('user : ', res);  
            result(null, res);
        }
    })
}


module.exports = User;