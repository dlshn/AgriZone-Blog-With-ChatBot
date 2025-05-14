// create/delete/search/update
const BlogSchema = require('../model/blogSchema'); 

const createBlog = async (req, res) => {
    const { title, content } = req.body;
    const imageUrl = req.file.path; // Cloudinary URL ******

    if (!title || !content || !image || !by) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newBlog = new BlogSchema({ title, content, image: imageUrl }); 
    // by before should set using authentication middleware

    await newBlog.save()
            .then(blog => res.status(201).json(blog))
            .catch(err => res.status(500).json({ message: 'Error creating blog', error: err }));
}


module.exports = {createBlog};