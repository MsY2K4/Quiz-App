const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    quizname: {
        type: String,
        required: true
    },
    quizdescription: {
        type: String,
        required: true
    }
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
