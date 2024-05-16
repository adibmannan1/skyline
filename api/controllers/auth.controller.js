import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const register = async(req, res) => {
    try{
        const {username, email, password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10) //password hashing

        const userExists = await prisma.user.findUnique({where: {username}}) //user exists or not
        if(userExists) res.status(400).json({error: 'User already exists'})
        
        const user = await prisma.user.create({ //user creation
            data: {
                email,
                username,
                password: hashedPassword
            }
        })
        
        const expiresIn = 3600 * 24 * 7 * 1000
        const token = jwt.sign({
            id: user.id
        }, process.env.JWT_SECRET_KEY, { expiresIn: expiresIn });

        res.cookie('token', token, {
            httpOnly: true,
            // secure: true,
            maxAge: expiresIn,
        }).json({user: user,
            token: token,
            message: 'User created'
        })
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'Something went wrong in the server'})
    }
}
export const login = async(req, res) => {
    try{
        const {username, password} = req.body
        const user = await prisma.user.findUnique({where: {username}}) //user exists or not

        if(!user){
            return res.status(404).json({error: 'Wrong username or password'})
        }else if(!await bcrypt.compare(password, user.password)){ //password check
            return res.status(401).json({error: 'wrong password'})
        }else {
            const expiresIn = 3600 * 24 * 7 * 1000
            const token = jwt.sign({
                id: user.id
            }, process.env.JWT_SECRET_KEY, { expiresIn: expiresIn });

            res.cookie('token', token, {
                httpOnly: true,
                // secure: true,
                maxAge: expiresIn,
            }).json({
                cookies: token,
                message: 'logged in'
            })
        }
    }catch(err){
        console.log(err)
        res.status(500).json({error: 'something is wrong in the server'})
    }
}
export const logout = (req, res) => {
    res.clearCookie('token').json({message: 'logged out'})
}