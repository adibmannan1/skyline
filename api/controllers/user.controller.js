import prisma from "../lib/prisma.js"
import bcrypt from "bcrypt"

export const getUsers = async(req, res) => {
    try{
        const users = await prisma.user.findMany()
        res.send(users)
    }catch(err){
        console.log(err)
        res.status(500).send('Failed to get users')
    }
}
export const getUser = async(req, res) => {
    const id = req.params.id
    try{
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        res.send(user)
    }catch(err){
        console.log(err)
        res.status(500).send('Failed to get users')
    }
}
export const updateUser = async(req, res) => {
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
        res.status(500).send('Could not update user')
    }
}
export const deleteUser = async(req, res) => {
    const id = req.params.id
    const tokenId = req.userId
    try{
        const user = await prisma.user.findUnique({where: {id}})
        if(!user) res.status(404).send('User does not exist.')

        if(id !== tokenId) res.status(403).send('Unauthorized')
        await prisma.user.delete({
            where: {id}
        })
        res.send('deleted')
    }catch(err){
        console.log(err)
        res.status(500).send('Failed to delete user.')
    }
}
export const savePost = async (req, res) => {
    const postId = req.body.postId
    const tokenId = req.userId

    try{
        const savedPost = await prisma.savedPost.findFirst({
            where: {
                AND: [
                    { userId: tokenId },
                    { postId: postId }
                ]
            }
        });
        if (savedPost) {
            await prisma.savedPost.delete({
              where: {
                id: savedPost.id,
              },
            });
            await prisma.post.update({
              where: {
                id: postId,
              },
              data: {
                isSaved: false,
            }
            })
            res.status(200).json({ message: "Post removed from saved list" });
          } else {
            await prisma.savedPost.create({
              data: {
                userId: tokenId,
                postId,
              },
            });
            await prisma.post.update({
                where: {
                  id: postId,
                },
                data: {
                  isSaved: true,
              }})

            res.status(200).json({ message: "Post saved" });
          }
    }catch(err){
        console.log(err)
        res.status(500).send('Failed to delete user.')
    }
}

export const profilePosts = async(req, res) => {
    const tokenId = req.params.userId
    try {
        const userPosts = await prisma.post.findMany({
            where: {
                userId: tokenId
            }
        });
        const saved = await prisma.savedPost.findMany({
            where: {
                userId: tokenId
            },
            include: {
                post: true
            }
        });
        const savedPosts = saved.map(item => item.post);
        res.json({
            userPosts,
            savedPosts
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Failed to get profile posts");
    }
}