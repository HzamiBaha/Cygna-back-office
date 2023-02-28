const router = require('express').Router();
const verify = require('./verifyToken');
const Post = require('../model/Post');
const upload = require('../upload')


//GET ALL POSTS

router.get('/', verify, async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        res.json({ message: err });

    }
})

//SUBMIT A POSTS
router.post('/', upload, async (req, res) => {
    console.log(req.body)

    const post = new Post({
        name: req.body.name,
        preview: req.body.preview,
        image: req.file.filename,
        sections: req.body.sections
    });
    try {
        const savedPost = await post.save();
        res.send(savedPost);
    } catch (err) {
        res.status(400).send(err);
    }
})

// GET ONE POST

router.get('/:postId', verify, async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });

    }
})

// DELETE POST

router.get('/:postId', verify, async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });

    }
})

router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: req.body }
        )
        res.json(updatePost)
    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = router;