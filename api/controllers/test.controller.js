import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const loggedIn = async(req, res) => {
    console.log(req.userId)
    res.status(200).send('You are logged in')
}
export const admin = async(req, res) => {
    const token = req.cookies.token
    if(!token) return res.status(401).send('You are Not logged in')

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if(err) res.status(403).send('You are not the user')
        if(!decoded.isAdmin) res.status(403).send('You are not the admin')
    });
    res.status(200).send('You are the admin')
}