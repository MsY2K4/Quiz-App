var mongoose = require('mongoose')
var questionSchema = mongoose.Schema({
    quizid: {
        type: String,
        required: true
    },
    questionId: {
        type: String,
    },
    questionText:{
        type: String, 
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    options:{
        type  :Array,
        default:[]
    }
})

const Question= mongoose.model('Question',questionSchema);
module.exports = Question;
