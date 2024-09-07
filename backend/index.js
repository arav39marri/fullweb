const express = require('express');
const app = express();
const userModel = require('./userModel');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.post('/create', async (req, res) => {
  try {
    const { name, username, age, email } = req.body;
    const createdUser = await userModel.create({ name, username, age, email });
    res.status(201).send(createdUser);
    console.log("User created:", createdUser);
  } catch (error) {
    res.status(500).send({ message: "Error creating user", error });
    console.error("Error creating user:", error);
  }
});

app.get('/read', async (req, res) => {
  try {
    const users = await userModel.find();
    if (!users) {
      return res.status(404).send({ message: "No users found" });
    }
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: "Error fetching users", error });
  }
});

app.delete('/delete', async (req, res) => {
  const { username } = req.body;
  try {
    const user = await userModel.findOneAndDelete({ username });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).send({ message: "Error deleting user", error });
    console.error("Error deleting user:", error);
  }
});

app.put('/update', async (req, res) => {
  const { username, newName, newAge, newEmail } = req.body;
  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { username },
      { name: newName, age: newAge, email: newEmail },
      { new: true }  
    );
    if (!updatedUser) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send({ message: "User updated successfully", updatedUser });
  } catch (error) {
    res.status(500).send({ message: "Error updating user", error });
    console.error("Error updating user:", error);
  }
});

mongoose.connect('mongodb://localhost:27017/myWebsite')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(3500, () => {
  console.log('Server is running on port 3500');
});
