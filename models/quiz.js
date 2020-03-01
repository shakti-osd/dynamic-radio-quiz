const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    question : {
        type: String,
        required: true 
    },
    options: {
        type:String,
        required: true
    },
    answer:{
        type: String,
        required: true
    }
})

module.exports = Quiz = mongoose.model('quiz', QuizSchema);