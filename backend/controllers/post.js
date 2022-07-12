const Post = require('../models/Post');
const fs = require('fs');

exports.CreatePost = (req, res) => {
    const newPost = JSON.parse(req.body.post)
    delete newPost._id
    const post = new Post({
        ...newPost,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
        hide: false
    });
    post.save()
    .then(() => {res.status(201).json({message: 'Post created successfully'})})
    .catch((error) => {res.status(400).json({error: error})})
}

exports.ModeratePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id })
    post.hide = !post.hide;

    post.save().then(() => res.json(200)).catch(err => console.log(err))
}

exports.LikePost = async ({body, params: { id }}, res) => {
    const post = await Post.findOne({ _id: id })

    if (body.like === 1) {
        post.likes  += 1
        post.usersLiked.push(body.userId);
    }

    if (body.like === 0) {
        const indexLiked = post.usersLiked.findIndex(userId => userId === body.userId)
        if (indexLiked !== -1) {
            post.likes -= 1
            post.usersLiked.splice(indexLiked, 1);
        }
    }

    post.save().then(() => res.json(200)).catch(err => console.log(err))
}

exports.AddCommentToPost = (req, res) => {
    const post = await Post.findOne({ _id: id })

    post.comments.push({username: req.user.username, content: req.content, date: new Date()})

    post.save().then(() => res.json(200)).catch(err => console.log(err))
}

exports.ShowCommentToPost = (_, res) => {
    Post.findOne({ _id: id }).then(
        (postComments) => {
            res.status(200).json(postComments.comments)     
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    )
}

exports.getSinglePost = (req, res) => {
    Post.findOne({
        _id: req.params.id
    }).then(
        (post) => {
            res.status(200).json(post);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            })
        }
    )
}

exports.HomePage = (_, res) => {
    Post.find().then(
        (post) => {
            res.status(200).json(post);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};