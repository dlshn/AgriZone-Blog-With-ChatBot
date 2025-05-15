import axios from 'axios';
import React,{useState} from 'react'

const CreateArticle = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    

    const handleImageChange = (e) => {
        
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
            console.log('Image URL:', data.imageUrl);
            setImage(data.imageUrl); // Set the image URL in state
            })
            .catch(err => console.error('Upload failed', err));
        }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            alert("Please upload an image first");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/article/create", {
            title,
            content,
            image
            });
            console.log(response.data);
            alert("Article Created Successfully");
            setTitle("");
            setContent("");
            setImage("");
        } catch (error) {
            console.error("Error:", error.message);
            alert("Failed to create article");
        }
    };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} placeholder="Enter title" required />
        </div>
        <div className="mb-3">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea className="form-control" rows="5" onChange={(e)=>setContent(e.target.value)} placeholder="Write your article here..." required></textarea>
        </div>
        <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default CreateArticle