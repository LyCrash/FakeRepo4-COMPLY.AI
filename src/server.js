import express from "express";
import { createUser } from "./user.js";

const app = express();
// app.use(express.json());
app.use(express.static("src")); // serve index.html

// Root route (optional, for testing)
app.get("/", (req, res) => {
  res.send("GDPR Test App is running!");
});

// User registration
app.post("/register", (req, res) => {
  const user = createUser(req.body);
  res.json({ status: "created", user });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
