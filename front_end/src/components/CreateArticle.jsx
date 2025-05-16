import axios from 'axios';
import React, { useState } from 'react';

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [content, setContent] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]); // Just store file, don't upload yet
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select an image to upload");
      return;
    }

    try {
      setIsUploading(true);

      // 1. Upload the image to Cloudinary
      const formData = new FormData();
      formData.append("image", imageFile);

      const uploadRes = await axios.post("http://localhost:5000/api/article/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageUrl = uploadRes.data.imageUrl;

      // 2. Submit article data with uploaded image URL
      const response = await axios.post("http://localhost:5000/api/article/create", {
        title,
        content,
        image: imageUrl,
      });

      console.log(response.data);
    //   alert("Article Created Successfully");

      // Clear the form
      setTitle("");
      setContent("");
      setImageFile(null);
      e.target.reset();
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to create article");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" required />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea className="form-control" rows="5" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your article here..." required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} required />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isUploading}>
          {isUploading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default CreateArticle;
