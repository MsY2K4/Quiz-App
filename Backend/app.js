const express = require('express');
const app = express();
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');
const port = 3000;


const User = require('./db/models/users.model');
const Quiz = require('./db/models/quiz.model');
const Question = require('./db/models/questions.model');



//load middlweare
app.use(bodyParser.json());


//Quiz HTTP Services

    app.get('/quiz', (req, res) => {
      // return an array of all quizzes
      Quiz.find({}).then((quizzes) => {
          res.send(quizzes);
      });
    });

    app.post('/quiz', (req, res) => {
      // create new quiz
      let quizname = req.body.quizname;
      let quizdescription = req.body.quizdescription;
      let newQuiz = new Quiz({ quizname, quizdescription: req.body.quizdescription });
      newQuiz.save().then((quizDoc) => {
          res.send(quizDoc);
      });
    });

    app.patch('/quiz/:id', (req, res) => {
      // update a quiz
      Quiz.findOneAndUpdate(
          { _id: req.params.id },
          { $set: req.body }
      ).then(() => {
          res.sendStatus(200);
      });
    });


    app.delete('/quiz/:id', (req, res) => {
      // delete a quiz
      Quiz.findOneAndDelete({
          _id: req.params.id
      }).then((removedQuizDoc) => {
          res.send(removedQuizDoc);
      });
    });

//Questions HTTP Services 
    app.get('/quiz/:quizId/questions', (req, res) => {
      // Get questions by the id of their parent quiz
      Question.find({ quizid: req.params.quizId }).then((questions) => {
        res.send(questions);
      });
    });

    app.post('/quiz/:quizId/questions',(req,res)=>{
      //create a new question in a quiz
      let newQuestion = Question({

        quizid: req.params.quizId,
        questionId: req.body.questionId,
        questionText: req.body.questionText,
        answer: req.body.answer,
        options: req.body.options,
      });
      newQuestion.save().then((newQuestionDoc)=>{
        res.send(newQuestionDoc)
      }).catch((error) => {
        res.status(400).send(error.message);
      });
    });

    app.delete('/quiz/:quizId/questions/:question_id', (req, res) => {
      // delete a question
      Question.findOneAndDelete({
          _id: req.params.question_id,
          quizid: req.params.quizId
      }).then((removedQuestionDoc) => {
          res.send(removedQuestionDoc);
      });
    });
    


app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
