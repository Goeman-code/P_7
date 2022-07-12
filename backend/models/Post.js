const mongoose = require('mongoose');

const postModel = mongoose.Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: false },  
    imageUrl: { type: String, required: false },
    createdAt: { type: String, required: true },
    hide: { type: Boolean },
    likes: { type: Number },
    usersLiked: [{
        type: String
    }],
    comments: [{
        username: { type: String, required: true },
        content: { type: String, required: true },
        createdAt: { type: String, required: true },
    }]
})

module.exports = mongoose.model('Post', postModel);