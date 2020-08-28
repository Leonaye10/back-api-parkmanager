const jwt = require('jsonwebtoken');

const authAllUser = (req, res, next) => {
    console.log(req.method, req.path, req.header("Authorization"));
    if(req.path == "/user"){
        const token = req.header("Authorization").replace("Bearer ", "");
        try{
            const decodedToken = jwt.verify(token, "mySecretKey");
            res.send({
                error: false,
                message: "Acces autorisé"
            })
             
        }catch(e){
            res.send({
                error: true,
                message: "Acces non autorisé"
            })
        }
    }
    next();
}

const authRole = (req, res, next) => {
    if(req.body.role !== "admin"){
        res.status(401);
        return res.send({
            message: "Not Allowed"
        });
    }
    next();
}

module.exports = { 
    authRole,
    authAllUser
};