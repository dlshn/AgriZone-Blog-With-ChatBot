const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
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
    image: {
        type: String,
        required: true,
    },
    by: {
        type: String,
        required: false,
    }


});
module.exports = mongoose.model('Blog', BlogSchema);