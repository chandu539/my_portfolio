const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
app.use(express.json());  
app.use(cors());  

const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/portfolio";

// Connect to MongoDB
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Contact Message Schema
const ContactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  message: { type: String, required: true },
});

const ContactMessage = mongoose.model("ContactMessage", ContactMessageSchema);

// Contact form submission route (POST)
app.post("/contact", async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    const newMessage = new ContactMessage({ name, email, mobile, message });
    await newMessage.save();

    res.status(200).json({ message: "Contact form submitted successfully!" });
  } catch (err) {
    console.error("Error handling contact form submission:", err);
    res.status(500).json({ message: "Failed to submit the contact form. Please try again later." });
  }
});

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: "gmail",  
  auth: {
    user: process.env.EMAIL_USER,  
    pass: process.env.EMAIL_PASS,  
  },
});

// Email sending route (POST)
app.post("/email", async (req, res) => {
  const { recipientEmail, subject, message } = req.body;

 
  const mailOptions = {
    from: recipientEmail,  
    to: process.env.EMAIL_USER,  
    subject: subject,  
    text: message,  
  };

  try {
    
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email. Please try again later." });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
