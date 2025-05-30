const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        required: true,
    },
    by: {
        type: String,
        required: false,
    },
    reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]



});
module.exports = mongoose.model('Blog', blogSchema);
