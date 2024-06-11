import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const secret = "Ad13S3CR3T"

export const register = async(req, res) => {
    try{
        const {name, username, email, password, age, address} = req.body
        const hashedPassword = await bcrypt.hash(password, 10) //password hashing

        const userExists = await prisma.user.findUnique({where: {username}}) //user exists or not
        const emailExists = await prisma.user.findUnique({where: {email}}) //email exists or not
        if(userExists) res.status(400).send('User already exists')
        if(emailExists) res.status(400).send('Email is already used')
        
        const user = await prisma.user.create({ //user creation
            data: {
                name,
                username,
                email,
                password: hashedPassword,
                age,
                address
            }
        })
        
        const expiresIn = 3600 * 24 * 7 * 1000
        const token = jwt.sign({
            id: user.id,
            isAdmin: true
        }, secret, { expiresIn: expiresIn });

        const {password: userPassword, ...finalUser} = user
        res.cookie('token', token, {
            httpOnly: true,
            // secure: true,
            maxAge: expiresIn,
        }).json(finalUser)
        
    }catch(err){
        console.log(err)
    }
}
export const login = async(req, res) => {
    try{
        const {username, email, password} = req.body
        const user = await prisma.user.findUnique({where: {username}}) //user exists or not

        if(!user){
            return res.status(404).send('Wrong username or password')
        }else if(!await bcrypt.compare(password, user.password)){ //password check
            return res.status(401).send('Wrong password')
        }else if(email !== user.email){
            return res.status(401).send('Wrong email')
        }
        else {
       
            const expiresIn = 3600 * 24 * 7 * 1000
            const token = jwt.sign({
                id: user.id,
                isAdmin: true
            }, secret, { expiresIn: expiresIn });

            
            const {password: userPassword, ...finalUser} = user
            res.cookie('token', token, {
                httpOnly: true,
                // secure: true,
                maxAge: expiresIn,
            }).json(finalUser)
        }
    }catch(err){
        console.log(err)
    }
}
export const logout = (req, res) => {
    res.clearCookie('token').json({message: 'logged out'})
}