const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title: {
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
    Image: {
        type: String,
        required: true,
    },
    by: {
        type: String,
        required: true,
    }


});
module.exports = mongoose.model('Blog', blogSchema);