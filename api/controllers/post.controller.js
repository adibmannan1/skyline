import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken"
const secret = "Ad13S3CR3T"

export const getPosts = async (req, res) => {
    const query = req.query;
    try {
        const posts = await prisma.post.findMany({
            where: {
                type: query.type || undefined,
                bedroom: parseInt(query.bedroom) || undefined,
                bathroom: parseInt(query.bathroom) || undefined,
                price:{
                    gte: parseInt(query.minPrice) || 0,
                    lte: parseInt(query.maxPrice) || 100000000
                },
                category: query.category || undefined
            }
        });
        res.send(posts);
    } catch (err) {
        console.log(err);
        res.status(500).send("Failed to get posts");
    }
}



export const getPost = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await prisma.post.findUnique({
            where: {
                id
            },
            include: {
                user: {
                    select: {
                        username: true,
                        avatar: true
                    }
                }
            }
        }); 

        const token = req.cookies?.token
        if (token) {
            jwt.verify(token, secret, async (err, payload) => {
                if (!err) {
                const saved = await prisma.savedPost.findUnique({
                    where: {
                    userId_postId: {
                        postId: id,
                        userId: payload.id,
                    },
                    },
                });
                res.status(200).json({ ...post, isSaved: saved ? true : false });
                }
            });
            }
    } catch (err) {
        console.log(err);
        res.status(500).send("Failed to get post");
    }    
}

export const addPost = async (req, res) => {
    const body = req.body;
    const userId = req.userId
    try {
        const post = await prisma.post.create({
            data: {
                ...body,
                userId
            }
        });
        res.send(post);
    } catch (err) {
        console.log(err);
        res.status(500).send("Failed to add post");
    }    
}   

export const updatePost = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const userId = req.userId

    const postItem = await prisma.post.findUnique({
        where: {
            id
        }
    });
    if (postItem.userId !== userId) res.status(403).send("Unauthorized");

    try {
        const post = await prisma.post.update({
            where: {
                id
            },
            data: body
        });
        res.send(post);
    } catch (err) {
        console.log(err);
        res.status(500).send("Failed to update post");
    }    
}

export const deletePost = async (req, res) => {
    const id = req.params.id;
    const userId = req.userId

    const post = await prisma.post.findUnique({
        where: {
            id
        }
    });
    if (post.userId !== userId) {
        return res.status(403).send("Unauthorized");
    }
    try {
        const post = await prisma.post.delete({
            where: {
                id
            }
        });
        res.send("Post deleted");
    } catch (err) {
        console.log(err);
        res.status(500).send("Failed to delete post");
    }    
}