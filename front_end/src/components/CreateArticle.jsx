import axios from 'axios';
import React, { useState } from 'react';
import "../styles/CreateArticle.css";
import "bootstrap/dist/css/bootstrap.min.css";



const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
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

      const uploadRes = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/article/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageUrl = uploadRes.data.imageUrl;

      // 2. Submit article data with uploaded image URL 
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/article/create`, 
        {
          title,
          content1,
          content2,
          image: imageUrl,
        },
        {headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
        }
      );

      console.log(response.data);
    //   alert("Article Created Successfully");

      // Clear the form
      setTitle("");
      setContent1("");
      setContent2("");
      setImageFile(null);
      e.target.reset();
    } catch (error) {
      console.error("Error:", error.message);
      alert("Failed to create article!");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
     <div className='container '>
      <div className="row d-flex align-items-center flex-column">
        <div className='col-12 col-sm-6 col-md-8 col-lg-8 p-5 create-article'>
          <h2 className='text-success text-center'>Create Article</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label fs-5">Title</label>
              <input id='title' type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" required />
            </div>
            <div className="mb-3">
              <label htmlFor="content1" className="form-label fs-5">Description</label>
              <textarea id='content1' className="form-control" rows="5" value={content1} onChange={(e) => setContent1(e.target.value)} placeholder="Write your article here..." required></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="content2" className="form-label fs-5">Content</label>
              <textarea id='content2' className="form-control" rows="5" value={content2} onChange={(e) => setContent2(e.target.value)} placeholder="Write your article here..." required></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label fs-5">Image</label>
              <input id='image' type="file" accept="image/*" onChange={handleImageChange} required />
            </div>
            <button type="submit" className="btn btn-success" disabled={isUploading}>
              {isUploading ? "Uploading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
     </div>
    </>
  );
};

export default CreateArticle;
