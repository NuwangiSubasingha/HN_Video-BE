const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
require("dotenv").config();
const authRoutes = require('./routes/Auth'); // Update the path

const app = express();
app.use(express.json());
app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/hnVideo")
//     .then(() => {
//         console.log("MongoDB connected successfully!");
//     })
//     .catch((err) => {
//         console.log("MongoDB connection failed:", err);
//     });

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err)=> console.log(err));

app.use('/api/auth', authRoutes); // So now you hit POST /api/auth/login and /api/auth/register

// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`));
