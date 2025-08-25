const express = require("express");
const cors = require("cors"); // CORS allow karne ke liye
const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // JSON body parse karne ke liye

// Test route
app.get("/hello", (req, res) => {
  res.json({ message: "Hello Kapil!" });
});

// Contact form route
app.post("/api/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  console.log("Contact form data:", req.body);

  // Yaha aap DB save ya email send kar sakte ho
  res.json({ message: "Form submitted successfully!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});