import jwt from "jsonwebtoken"
export const verifyToken = (req, res, next) => {
    
    const token = req.cookies.token
    if(!token) return res.status(401).send('You are Not logged in')

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if(err) res.status(403).send('You are not the user')
        req.userId = decoded.id
        next()
    });

}