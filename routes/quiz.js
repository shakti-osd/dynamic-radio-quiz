const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const QuizModel = require('../models/quiz')

router.post('/add', (req,res) => {
    const QuizData = new QuizModel({
        question: req.body.question,
        options: req.body.options,
        answer: req.body.answer
    });

    QuizData.save()
        .then(quiz => res.send(quiz))
        .catch(err => res.end(err))
   
})

router.get('/list', (req,res) => {
    QuizModel.find({})
        .then(quiz => {
            if(quiz.length <=0){
                res.send({message:'No quiz found'})
            }else{
                res.send({quiz})
            }
            
        })
        .catch(err => console.log(err))
    
})

module.exports = router