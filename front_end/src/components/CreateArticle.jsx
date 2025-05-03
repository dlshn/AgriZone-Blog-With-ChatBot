import axios from 'axios';
import React,{useState} from 'react'

const CreateArticle = () => {
    const [title, setTitle] = useState("");
    // const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setImage(reader.result); //set base64 string
    //     };
    //     if (file) {
    //         reader.readAsDataURL(file);
    //     } else {
    //         setImage(null);
    //     }
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/article/create", {
            title: title,
            content: content,
            // image: image
        })
        .then((response) => {
            console.log(response.data);
            alert("Article Created Successfully");
            setTitle("");
            setContent("");
            // setImage("");
        })
        .catch((error) => {
            console.error("Error:", error.message);
            alert("Failed to create article");
        });
    }



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
            {/* <input type="file" accept="image/*" onChange={handleImageChange} /> */}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default CreateArticle