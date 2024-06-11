import jwt from "jsonwebtoken"
const secret = "Ad13S3CR3T"
export const verifyToken = (req, res, next) => {
    
    const token = req.cookies.token
    if(!token) return res.status(401).send('You are Not logged in')

    jwt.verify(token, secret, (err, decoded) => {
        if(err) res.status(403).send('You are not the user')
        req.userId = decoded.id
        next()
    });

}