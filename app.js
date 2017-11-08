'use strict';

function Question (answer, string, successMessage, failMessage){
  //There will be several different questions all handled the same way.
  //This will construct each question to make looping through them easier.
  this.answer = answer;
  this.question = string;
  this.successMessage = successMessage;
  this.failMessage = failMessage;
  this.getUserAnswer = function(){
    //method to get answer to question from user. Only accepts valid answers.
    //interprets answers to a true/false and returns.
    var userAnswer = '';
    while (userAnswer != true && userAnswer != false) {
      userAnswer = prompt('Please answer yes/no to the following:' + this.question);
      console.log('for question', this.question, 'user input was', userAnswer);
      toLowerCase (userAnswer);
      console.log('Altered user input', userAnswer);
      //odd structure for console.log(), but needed to idenitry wich object had
      //errors.
      if (userAnswer === 'yes' || userAnswer === 'y'){
        userAnswer = true;
      } else if (userAnswer === 'no' || userAnswer === 'n') {
        userAnswer = false;
      } else {
        alert ('Invalid input! Try again!');
      }
    }
    console.log('got valid user answer:', userAnswer);
    return userAnswer;
  };
  this.checkUserAnswer = function (userAnswer){
    //compares user answer to question to question's actual answer.
    //displays appropriate success/fail answer based on comparison.
    if (userAnswer === this.answer){
      confirm (this.successMessage);
    } else if (userAnswer != this.answer) {
      confirm (this.failMessage);
    } else {
      console.log('ERROR in checkUserAnswer question', this.question);
    }
  };
}
console.log('Function declarations complete');

//main function begins here
var questions = [];
console.log('init questions array', questions);
//this is where the Question objects will go.
questions.push (new Question(true, 'Has Brent lived on three continents?',
  'Yes! Although, bizarrely, it\'s been over a decade since I left this one',
  'Actually, the answer is yes. Five years in Europe and two in Asia.'));
  console.log('first addtion to questions array:', questions[0]);
  //
questions.push (new Question(false, 'Does Brent speak three languages?',
  'Incorrect! I speak English an a little French. I can write code in four, though.',
  'Correct! I would like to become a polyglot, but I learned coding instead.'));
questions.push (new Question (false, 'Does Brent drink three cups of coffee a day?',
  'No! While I will drink coffee socially, I prefer tea as a daily beverage.',
  'Yes! I drink that much tea, not coffee.'));
questions.push (new Question(true, 'Has Brent been alive for three decades?',
  'How rude! No! :(', 'Correct! I\m still in my mid twenties'));
questions.push (new Question(true, 'Is Brent a bit obssessed with the number three?',
  'Obviously! Someone notice the pattern to these questions. Good job! :)',
  'Actually, I am. That\'s why all these questions are about the number three.'));

var i = 0;
//declaring index.

//now that everything is set up, time for the actual execution.
for (i; i < questions.length; i++){
  questions[i].checkUserAnswer(questions[i].getUserAnswer());
}