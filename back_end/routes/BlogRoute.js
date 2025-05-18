const express = require('express');
const router = express.Router();

const BlogController = require('../controller/BlogController');
const { upload } = require('../utils/multer');

router.post('/create', BlogController.createBlog);
router.post('/upload', upload.single('image'), (req, res) => {
    const imageUrl = req.file.path; // Assuming you are using multer to handle file uploads
    res.json({ imageUrl });
});
router.get('/getAll', BlogController.getAllArticles);
router.get('/getById/:id', BlogController.getArticleById);
// router.post('/react/:id', BlogController.reactToArticle);
// router.put('/update/:id', BlogController.updateBlog);
// router.delete('/delete/:id', BlogController.deleteBlog);


module.exports = router; 