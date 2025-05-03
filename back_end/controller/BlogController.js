create/delete/search/update
const BlogSchema = require('../models/BlogModel'); // Assuming you have a Blog model defined

const createBlog = (req, res) => {
    const { title, content, image, by } = req.body;

    if (!title || !content || !Image || !by) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newBlog = new BlogSchema({ title, content, image, by }); 
    // by before should set using authentication middleware

    newBlog.save()
        .then(blog => res.status(201).json(blog))
        .catch(err => res.status(500).json({ message: 'Error creating blog', error: err }));
}


module.exports = {createBlog};