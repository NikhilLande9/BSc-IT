const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;
const MONGODB_URI = 'mongodb+srv://bscitoriginals:originals@cluster0.jw5h8.mongodb.net/Originals?retryWrites=true&w=majority&appName=Cluster0'; 

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define Schema and Model for 'Answers' collection
const QuestionSchema = new mongoose.Schema({
  question: String,
  answer: String,
});
const Question = mongoose.model('answers', QuestionSchema);

// API Route for fetching the answer based on the question
app.get('/answers', async (req, res) => {
  const { question } = req.query;
  
  console.log('Received question:', question);  // Debug log to see what is actually being received

  if (!question) {
      return res.status(400).json({ error: "No question provided" });  // Handle the case where no question is passed
  }

  try {
      const result = await Question.findOne({ question });

      if (!result) {
          console.log('Question not found in database');
          return res.status(404).json({ message: 'Question not found' });
      }

      console.log('Found answer:', result.answer);
      res.json({ answer: result.answer });
  } catch (error) {
      console.error('Error fetching data from DB:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});