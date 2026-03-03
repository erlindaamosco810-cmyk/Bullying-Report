import express from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Example middleware
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Use PORT from environment, default to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
