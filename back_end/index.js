const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
app.post('/api/chat', async (req, res) => {
    const { message } = req.body;
    try{
        const model = genAI.getGenerativeModel({
            model: 'gemini-1.5-pro',
            generationConfig: {
                maxOutputTokens: 512,
                temperature: 0.9,
              }
        });
        const chat = model.startChat({
            history: [
              {
                role: 'user',
                parts: [{ text: 'You are an agriculture assistant. Only give farming, gardening, and agricultural-related solutions.please try to use simple English for response and under 150 words' }],
              },
              {
                role: 'model',
                parts: [{ text: 'Understood. I will answer only agriculture-related questions.' }],
              },
            ],
          });
          
        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();
        res.json({ reply:text + "\n\n**-AgriZone**" });

    }catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Failed" });
    }

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });