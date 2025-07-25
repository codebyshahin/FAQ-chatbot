const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Sample FAQ responses
const faq = {
  "what is your name": "I am an AI-powered FAQ bot!",
  "how does this work": "I answer your frequently asked questions using simple AI logic.",
  "who created you": "A passionate developer like you!",
};

// Optional: Simple GET route to check server is running
app.get("/", (req, res) => {
  res.send("✅ AI FAQ Chatbot Backend is running!");
});

// POST route to handle chat messages from frontend
app.post("/api/chat", (req, res) => {
  const userQuestion = req.body.message.toLowerCase();
  let answer = faq[userQuestion] || "Sorry, I don't know the answer yet.";
  res.json({ reply: answer });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
