const jwt = require('jsonwebtoken');

exports.authMiddleware = (req,res,next)=>{
    const authHeader = req.headers["authorization"];
    if(!authHeader)
    {
        return res.status(401).json({error:"No token provided"});
    }
    const token = authHeader.split(" ")[1];
    if(!token)
    {
        return res.status(401).json({error:"Unauthorized"});
    }
    try {
        const decoded = jwt.verify(token,process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }

};