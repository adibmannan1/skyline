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

        for(const chat of chats){
            const receiverId = chat.userIds.find(id => id !== tokenId)
            const receiver = await prisma.user.findUnique({
                where: {
                    id: receiverId
                },
                select: {
                    id: true,
                    username: true,
                    avatar: true
                }
            })
            chat.receiver = receiver
        }
        res.send(chats)
        // console.log(chats)
    }catch(err){
        console.log(err)
        res.status(500).send('Failed to get chats')
    }
}
export const getChat = async(req, res) => {
    const tokenId = req.userId

    try{
        const chat = await prisma.chat.findUnique({
            where: {
                id: req.params.id,
                userIds: {
                    hasSome: [tokenId]
                }
            },
            include: {
                messages: {
                    orderBy: {
                        createdAt: 'asc'
                    }
                }
            }
        })

        await prisma.chat.update({
            where: {
                id: req.params.id
            },
            data: {
                seenBy: {
                    push: [tokenId]
                }
            }
        })
        res.send(chat)
    }catch(err){
        console.log(err)
        res.status(500).send('Failed to get chats')
    }
}
export const addChat = async (req, res) => {
    const tokenId = req.userId;
    try {
      const newChat = await prisma.chat.create({
        data: {
          userIds: [tokenId, req.body.receiverId],
        },
      });
      res.status(200).json(newChat);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Failed to add chat!" });
    }
  };
export const readChat = async(req, res) => {
    const tokenId = req.userId
    try{
        const chat = await prisma.chat.update({
            where: {
                id: req.params.id,
                userIds: {
                    hasSome: [tokenId]
                }
            },
            data: {
                seenBy: {
                    push: [tokenId]
                }
            }
        })
        res.send(chat)
    }catch(err){
        console.log(err)
        res.status(500).send('Failed to delete chat.')
    }
}