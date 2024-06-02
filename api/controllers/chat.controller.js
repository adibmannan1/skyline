import prisma from "../lib/prisma.js"

export const getChats = async(req, res) => {
    const tokenId = req.userId
    try{
        const chats = await prisma.chat.findMany({
            where: {
                userIds: {
                    hasSome: [tokenId]
                }
            }
        })
        res.send(chats)
    }catch(err){
        console.log(err)
        res.status(500).send('Failed to get chats')
    }
}
export const getChat = async(req, res) => {
    const id = req.params.id
    try{
        const user = await prisma.chat.findUnique({
            where: {
                id
            }
        })
        res.send(user)
    }catch(err){
        console.log(err)
        res.status(500).send('Failed to get chats')
    }
}
export const addChat = async(req, res) => {
    const id = req.params.id
    const tokenId = req.userId
    const body = req.body
    const {password, avatar, ...userData} = body
    let updatedPassword = null
    try{
        if(id !== tokenId) res.status(403).send('Unauthorized')

        if(password) updatedPassword = await bcrypt.hash(password, 10)

        const updatedUser = await prisma.user.update({
            where: {id},
            data: {
                ...userData,
                ...(updatedPassword && {password: updatedPassword}),
                ...(avatar && {avatar})
            }
        })
        res.send(updatedUser)
    }catch(err){
        console.log(err)
        res.status(500).send('Could not update chat')
    }
}
export const readChat = async(req, res) => {
    const id = req.params.id
    const tokenId = req.userId
    try{
        const user = await prisma.chat.findUnique({where: {id}})
        if(!user) res.status(404).send('User does not exist.')

        if(id !== tokenId) res.status(403).send('Unauthorized')
        await prisma.chat.delete({
            where: {id}
        })
        res.send('deleted')
    }catch(err){
        console.log(err)
        res.status(500).send('Failed to delete chat.')
    }
}