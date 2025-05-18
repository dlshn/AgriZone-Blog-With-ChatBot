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

const reactToArticle = async (req, res) => {
    try {
    const article = await Article.findById(req.params.id);
    const userId = req.user.id;

    // Toggle reaction (add or remove)
    if (article.reactions.includes(userId)) {
      article.reactions.pull(userId);
    } else {
      article.reactions.push(userId);
    }

    await article.save();
    res.status(200).json({ message: "Reaction updated", reactions: article.reactions.length });
  } catch (err) {
    res.status(500).json({ message: "Failed to react", error: err.message });
  }
}


module.exports = {createBlog, getAllArticles, getArticleById}; 