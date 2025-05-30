// create/delete/search/update 
const BlogSchema = require('../model/blogSchema');

const createBlog = async (req, res) => {
    const { title, content1,content2, image } = req.body;

    if (!title || !content1 || !content2 || !image) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newBlog = new BlogSchema({ title, description:content1, content:content2, image });

    await newBlog.save()
            .then(blog => res.status(201).json(blog))
            .catch(err => res.status(500).json({ message: 'Error creating blog', error: err }));
}

const getAllArticles = async (req, res) => {
    try {
        const articles = await BlogSchema.find().sort({ createdAt: -1 }); // Sort by creation date, newest first 
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blogs', error });
    }
}

const getArticleById = async (req, res) => {
    const { id } = req.params;
    try {
        const article = await BlogSchema.findById(id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching article', error });
    }
}

module.exports = {createBlog, getAllArticles, getArticleById }; 