const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
var fixtures = require('node-mongoose-fixtures');

const userModel = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatarUrl: { type: String, required: true },
    role: { type: String },
});

userModel.plugin(uniqueValidator);

module.exports = mongoose.model('User', userModel);

fixtures({
    User: [
        {
            email: "admin@admin.fr",
            username: "admin",
            password: "$2y$10$WUTKozdWLiJANgeinJRb.e8d7eNygXv6DkbPjTLM.NKoQNlq9vClC",
            avatarUrl: "",
            role: 'ROLE_ADMIN'
        }
    ]
})