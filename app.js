'use strict';

var correctAnswers = 0;
function isInArray (stuff, arr) {
  for (var counter = 0; counter < array.length; counter++) {
    var answerCorrect = false;
    if (stuff === arr[counter]) {
      answerCorrect = true;
      break;
    }
  }
  return answerCorrect;
}
function Question (answer, string, successMessage, failMessage){
  //There will be several different questions all handled the same way.
  this.answer = answer;
  this.question = string;
  this.successMessage = successMessage;
  this.failMessage = failMessage;
  this.getUserAnswer = function (){
    var userAnswer = '';
    while (userAnswer !== true && userAnswer !== false) {
      userAnswer = prompt ('Please answer yes/no to the following: ' + this.question);
      userAnswer = userAnswer.toLowerCase();
      if (userAnswer === 'yes' || userAnswer === 'y'){
        userAnswer = true;
      } else if (userAnswer === 'no' || userAnswer === 'n') {
        userAnswer = false;
      } else {
        alert ('Invalid input! Try again!');
      }
    }
    return userAnswer;
  };
  this.checkUserAnswer = function (userAnswer){
    if (userAnswer === this.answer){
      correctAnswers++;
      confirm (this.successMessage);
    } else if (userAnswer != this.answer) {
      confirm (this.failMessage);
    } else {
      console.log('ERROR in checkUserAnswer question', this.question);
    }
  };
}

var questions = [];
questions.push (new Question(true, 'Has Brent lived on three continents?',
  'Yes! Although, bizarrely, it\'s been over a decade since I left this one',
  'Actually, the answer is yes. Five years in Europe and two in Asia.'));
questions.push (new Question(false, 'Does Brent speak three languages?',
  'Correct! I speak English an a little French. I learned coding instead.',
  'Incorrect! I would like to become a polyglot, but I learned coding instead.'));
questions.push (new Question (false, 'Does Brent drink three cups of coffee a day?',
  'Correct! While I will drink coffee socially, I prefer tea as a daily beverage.',
  'Yes! I drink that much tea, not coffee.'));
questions.push (new Question(false, 'Has Brent been alive for three decades?',
  'Correct! I\'m still in my mid twenties',
  'How rude! No! :('));
questions.push (new Question(true, 'Is Brent a bit obssessed with the number three?',
  'Obviously! Someone noticed the pattern to these questions. Good job! :)',
  'Actually, I am. That\'s why all these questions are about the number three.'));

for (var i = 0; i < questions.length; i++){
  questions[i].checkUserAnswer(questions[i].getUserAnswer());
}
var userCorrect = false;
var userInput = 3;
var classCode = new Question ('121', 'What was the course number of Brent\'s first coding course',
  'Yes. cpts 121 at WSU.', 'nope! HINT: three digit integer.');
for (var j = 0; j < 4; j++){
  userInput = prompt (classCode.question).toLowerCase ();
  if (userInput === classCode.answer){
    userCorrect = true;
    alert (classCode.successMessage);
    correctAnswers++;
    break;
  } else {
    alert (classCode.failMessage);
  }
}
if (!userCorrect){
  alert('Too many incorrect answers! Answer: Brent\'s first coding course was CPTS 121 at WSU');
}

var topUsChessPlayers = ['caruana', 'so', 'nakamura', 'onischuk', 'kamsky', 'akobian'];
//source: US Chess Federation website pulled 2017.11.08 15:25
//http://www.uschess.org/component/option,com_top_players/Itemid,371?op=list&month=1710&f=usa&l=R:Top%20Overall.&h=Overall
var chessQuestion = new Question(topUsChessPlayers, 'Brent loves chess. Can you name one of the top six US chess players? Use only the last name, spelling will count.',
'Congratulations! You know your chess players!', 'Nope!');
userCorrect=false;
userInput = 3;
var l = 1;
while (!userCorrect && l <=6) {
  userInput = prompt (chessQuestion.question).toLowerCase ();
  userCorrect = isInArray(userInput, topUsChessPlayers);
  if (userCorrect){
    correctAnswers++;
    alert (chessQuestion.successMessage);
  }
  if (!userCorrect){
    alert (chessQuestion.failMessage);
  }
  l++;
}
if (!userCorrect) {
  alert ('Too many wrong answers. u even trivia, bro?');
}
alert ('you got ' + correctAnswers + ' questions correct. Congrats!');
