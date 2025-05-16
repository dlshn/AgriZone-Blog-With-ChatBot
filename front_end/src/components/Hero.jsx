import React, {useState} from "react";
import Typewriter from "typewriter-effect";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.css"; // Custom CSS file for additional styling
import { Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";



export const Hero = () => {
  const [message, setMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: message,
      });
      setBotResponse(response.data.reply);
    } catch (error) {
      console.error("Error:", error.message);
      setBotResponse("Failed to get response from the bot.");
    }
    setMessage(""); // Clear the input field after sending the message
    setLoading(false);
  }
  return (
    <section className="hero">
      <div className="container d-flex align-items-center text-center ">
         
        <div className="row">
          <h1 className="col-12 hero-title ">
            <Typewriter
                options={{
                  strings: ["Welcome to AgriZone.."],
                  autoStart: true,
                  loop: true,
                  typeSpeed: 50
                }}
              />
          </h1>
          {/* left box */}
          <div className="col-12 col-sm-6 left-box ">
            
            <p className="hero-subtitle">
            Welcome to AgriZone – your go-to place for everything agriculture! 🌱 Whether you're a farmer, gardener, or just love plants, we bring you expert tips, modern farming techniques, and the latest agri-tech news. Learn about organic farming, soil health, crop care, and sustainable agriculture. Our goal is to help you grow better, farm smarter, and stay updated with new trends. 🌾💡<br /><br />

            Have questions? Meet our smart chatbot! 🤖💬 It’s here 24/7 to answer your farming-related queries, suggest best practices, and guide you with quick solutions. Just type your question and get instant responses. Whether you need help with pest control, weather updates, or planting tips, our chatbot is always ready.

            Join our community of passionate farmers and agriculture lovers. Let’s grow together! 🚜🌿
            </p>
            
            <Link to="/CreateArticle" className="btn btn-success btn-lg ms-3">Register and Write Blog</Link>
          </div>

          {/* Right box */}
          <div className="col-12 col-sm-6 right-box ">
            <h1>Chatbot</h1>
            <div className="">
              <input
              type="text"
              className="chatbot"
              placeholder="Ask anything about agriculture..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              />
            </div>
            <button className="btn btn-success mt-4" onClick={handleAsk}>Ask</button>

            {loading ? (
              <div className="mt-3 p-3 border rounded bg-light">
                <strong>Bot:</strong> ⏳ Thinking...
              </div>
            ) : botResponse && (
              <div className="mt-3 p-3 border rounded bg-light">
                <strong>Bot:</strong><ReactMarkdown>{botResponse}</ReactMarkdown>
              </div>
            )}

          </div>

        </div>
      </div>
      

    </section>
  );
};


