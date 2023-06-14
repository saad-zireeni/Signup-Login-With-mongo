const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://saad:databasepassword@cluster0.ohijuw7.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Create the Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
