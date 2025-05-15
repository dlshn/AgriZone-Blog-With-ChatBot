// create/delete/search/update
const BlogSchema = require('../model/blogSchema'); 

const createBlog = async (req, res) => {
    const { title, content, image } = req.body;

    if (!title || !content || !image) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newBlog = new BlogSchema({ title, content, image }); 
    // by before should set using authentication middleware

    await newBlog.save()
            .then(blog => res.status(201).json(blog))
            .catch(err => res.status(500).json({ message: 'Error creating blog', error: err }));
}


module.exports = {createBlog};