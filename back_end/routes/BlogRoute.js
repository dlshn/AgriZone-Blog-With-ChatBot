const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const BlogController = require('../controller/BlogController');

router.post('/create',upload.single('image'), BlogController.createBlog);
// router.get('/getAll', BlogController.getAllBlogs);
// router.get('/getById/:id', BlogController.getBlogById);
// router.put('/update/:id', BlogController.updateBlog);
// router.delete('/delete/:id', BlogController.deleteBlog);
// router.get('/search/:query', BlogController.searchBlogs);

module.exports = router;