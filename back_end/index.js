const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const BlogRoute = require('./routes/BlogRoute');
const AdminRoute = require('./routes/AdminRoute');
const rateLimit = require('express-rate-limit');


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 15, 
  message: "Too many requests. Please wait a minute and try again.",
  standardHeaders: true,
  legacyHeaders: false,
});

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/chat',apiLimiter, async (req, res) => {
  const { message } = req.body;
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.5,
        maxOutputTokens: 150,
        topP: 0.8,
        topK: 40,
      },
     });
    const result = await model.generateContent(
      `You are an agriculture assistant. Answer in simple English (under 150 words): ${message}`
    );
    const response = result.response;
    const text = response.text();
    res.json({ reply: text + "\n\n-**AgriZone**" });
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    res.status(500).json({ error: "AI failed to respond." });
  }
});


// app.post('/upload', upload.single('image'), (req, res) => {
//   res.json({ imageUrl: req.file.path });
// });

app.use('/api/article',BlogRoute);
app.use('/api/admin', AdminRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

