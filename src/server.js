import express from "express";
import { createUser } from "./user.js";

const app = express();
app.use(express.json());

app.post("/register", (req, res) => {
  const user = createUser(req.body);
  res.json({ status: "created", user });
});

/*
 ❌ NO endpoint for account deletion
 ❌ Violates Article 17 (right to erasure)
*/

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
