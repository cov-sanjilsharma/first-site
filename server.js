// A minimal Node.js web server using Express.
// It just serves static files (HTML/CSS/JS) from the "public" folder.

const express = require("express");
const path = require("path");

const app = express();

// Serve everything inside /public as static assets (index.html, style.css, etc.)
app.use(express.static(path.join(__dirname, "public")));

// A tiny API route, just to prove the "Node.js" part is doing real work.
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from your Node.js backend!" });
});

// Render on most free hosts injects the port to use via process.env.PORT.
// Locally, it falls back to 3000.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
