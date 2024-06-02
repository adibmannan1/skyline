import prisma from "../lib/prisma.js"

export const addMessage = async(req, res) => {
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