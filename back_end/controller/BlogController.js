// create/delete/search/update
const BlogSchema = require('../model/blogSchema'); 

const createBlog = async (req, res) => {
    const { title, content, image } = req.body;

    if (!title || !content || !image) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newBlog = new BlogSchema({ title, content, image });

    await newBlog.save()
            .then(blog => res.status(201).json(blog))
            .catch(err => res.status(500).json({ message: 'Error creating blog', error: err }));
}

const getAllArticles = async (req, res) => {
    try {
        const articles = await BlogSchema.find();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs', error });
    }
}


module.exports = {createBlog, getAllArticles};