import prisma from "../lib/prisma.js"

export const addMessage = async(req, res) => {
    const tokenId = req.userId
    const chatId = req.params.chatId
    const text = req.body.text
    try{
        const chat = await prisma.chat.findMany({
            where: {
                id: chatId,
                userIds: {
                    hasSome: [tokenId]
                }
            }
        })

        if(!chat) return res.status(404).send('Chat does not exist.')

        const message = await prisma.message.create({
            data: {
                text,
                chatId,
                userId: tokenId
            }
        })

        await prisma.chat.update({
            where: {
                id: chatId
            },
            data: {
                seenBy:  [tokenId],
                lastMessage: text
            }
        })
        res.send(message)
    }catch(err){
        console.log(err)
        res.status(500).send('Failed to get the message')
    }
}