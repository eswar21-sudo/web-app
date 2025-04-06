const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB (use a placeholder for now)
mongoose.connect('mongodb://mongo-service:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a simple schema
const DataSchema = new mongoose.Schema({
  message: String,
});

const Data = mongoose.model('Data', DataSchema);

// Example route
app.get('/api/data', async (req, res) => {
  const data = await Data.findOne();  // Assuming data exists
  res.json(data);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
