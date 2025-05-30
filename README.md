# 🌿 AgriZone Blog

**AgriZone** is a modern, full-stack blog platform built with the **MERN Stack (MongoDB, Express, React, Node.js)**, designed specifically for the agriculture community. It allows users to post and read articles related to agriculture, interact via reactions, and even chat with a **smart AI-powered assistant** to solve agriculture-related problems.

---

## 🌐 Live Demo

- 🖥️ **AgriZone**: [https://agrizone-blog-with-chatbot.vercel.app](http://agri-zone-blog-with-chat-bot.vercel.app/)  

---

## ☁️ Deployment

- **Frontend Deployment**:  
  Deployed using [**Vercel**](https://vercel.com), a fast and developer-friendly platform for React apps.  
  ➤ Auto-deploys from GitHub on every push.

- **Backend Deployment**:  
  Deployed using [**Railway**](https://railway.app), a cloud platform for hosting Node.js/Express backends and MongoDB integrations.  
  ➤ CI/CD connected to GitHub with environment variables managed via Railway dashboard.

---

## 🚀 Features

- 📝 Post and view agriculture articles  
- 🖼️ Upload images to **Cloudinary**  
- 🔐 Secure user authentication (JWT)  
- 🤖 **AI Chatbot powered by Gemini API** to answer agriculture questions  
- ❤️ Like/react to posts (only for authenticated users)  
- 📱 Responsive UI with **Bootstrap**  
- ☁️ Backend with **Express & MongoDB Atlas**  
- 📤 File uploads with `multer`  
- 📧 Contact form powered by **EmailJS**

---

## 💻 Tech Stack

| Frontend     | Backend       | Other Tools          |
| ------------ | ------------- | -------------------- |
| React.js     | Node.js       | Gemini API (AI Chat) |
| Bootstrap    | Express.js    | Cloudinary (images)  |
| Axios        | MongoDB Atlas | JWT Auth             |
| React Router | Mongoose      | Multer (upload)      |
| EmailJS      |               |                      |

---

## 🤖 AI Chatbot Feature

AgriZone integrates a chatbot that helps users ask and resolve agriculture-related queries. It uses AI to provide answers to common farming issues such as:

- 🌾 Farming tips  
- 🌱 Pest control  
- 🌦️ Crop suggestions by season  
- 🧪 Organic methods  
- 🌻 Garden care  

🧠 The bot is accessible directly on the blog's homepage for instant support.

---

## 📧 Contact Form (EmailJS Integration)

AgriZone includes a **Contact Us** form powered by **[EmailJS](https://www.emailjs.com/)** so visitors can reach out easily without backend email configuration.

### ✉️ EmailJS Features:

- Send messages directly from frontend using EmailJS API  
- Form includes: Name, Email, and Message  
- Secure public key and environment variables  
- Styled using Bootstrap

### ⚖️ Setup Instructions:

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)
2. **Create an email service**, **template**, and copy your:
   - **Service ID**
   - **Template ID**
   - **Public Key**
3. Add these to your `.env` file in the `front_end/` directory:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. The form is located in `src/pages/Contact.js` and uses:

```bash
npm install @emailjs/browser
```

---

## 📦 Installation

###  Clone the repository

```bash
git clone https://github.com/dlshn/AgriZone-Blog-With-ChatBot.git
cd AgriZone-Blog-With-ChatBot

cd back_end
npm install

-- Create a .env file
 
MONGODB_URI=your_mongodb_uri
jwt_secret=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

npm start

cd ../front_end
npm install

npm start
```
