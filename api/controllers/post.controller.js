import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany();
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
        res.send(post);
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