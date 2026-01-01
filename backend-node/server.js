const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();   // <-- IMPORTANT to load .env file

const app = express();
app.use(express.json());
app.use(cors());

// ======================
// MongoDB Connection
// ======================
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.log("MongoDB Error:", err));

// ======================
// Mongoose User Schema
// ======================
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', UserSchema);

// ======================
// Default Home Route (fix for Cannot GET /)
// ======================
app.get("/", (req, res) => {
    res.send("Backend is running successfully 🚀");
});

// ======================
// CRUD Routes
// ======================
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User added successfully" });
});

app.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
});

// ======================
// Start Server
// ======================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
