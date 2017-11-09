'use strict';

var correctAnswers = 0;
function Question (answer, string, successMessage, failMessage){
  //There will be several different questions all handled the same way.
  //This will construct each question to make looping through them easier.
  this.answer = answer;
  this.question = string;
  this.successMessage = successMessage;
  this.failMessage = failMessage;
  this.getUserAnswer = function (){
    //method to get answer to question from user. Only accepts valid answers.
    //interprets answers to a true/false and returns.
    var userAnswer = '';
    while (userAnswer !== true && userAnswer !== false) {
      //Until I went home and did the reading last night, I could not get the
      //while condition to evaluate the way I wanted
      userAnswer = prompt ('Please answer yes/no to the following:' + this.question);
      console.log ('for question', this.question, 'user input was', userAnswer);
      userAnswer = userAnswer.toLowerCase();
      console.log ('Altered user input', userAnswer);
      if (userAnswer === 'yes' || userAnswer === 'y'){
        userAnswer = true;
      } else if (userAnswer === 'no' || userAnswer === 'n') {
        userAnswer = false;
      } else {
        alert ('Invalid input! Try again!');
        console.log ('invalid user answer was:', userAnswer);
      }
      console.log ('user answer method output:', userAnswer, 'actual:', this.answer);
    }
    console.log ('got valid user answer:', userAnswer);
    return userAnswer;
  };
  this.checkUserAnswer = function (userAnswer){
    //compares user answer to question to question's actual answer.
    //displays appropriate success/fail answer based on comparison.
    if (userAnswer === this.answer){
      console.log('answers match!');
      correctAnswers++;
      confirm (this.successMessage);
    } else if (userAnswer != this.answer) {
      console.log('answers don\'t match!');
      confirm (this.failMessage);
    } else {
      console.log('ERROR in checkUserAnswer question', this.question);
    }
  };
}
console.log('Function declarations complete');

//Assemble questions into an array
var questions = [];
console.log ('init questions array', questions);
//this is where the Question objects will go.
questions.push (new Question(true, 'Has Brent lived on three continents?',
  'Yes! Although, bizarrely, it\'s been over a decade since I left this one',
  'Actually, the answer is yes. Five years in Europe and two in Asia.'));
  console.log('first addtion to questions array:', questions[0]);
questions.push (new Question(false, 'Does Brent speak three languages?',
  'Correct! I speak English an a little French. I learned coding instead.',
  'Incorrect! I would like to become a polyglot, but I learned coding instead.'));
questions.push (new Question (false, 'Does Brent drink three cups of coffee a day?',
  'Correct! While I will drink coffee socially, I prefer tea as a daily beverage.',
  'Yes! I drink that much tea, not coffee.'));
questions.push (new Question(false, 'Has Brent been alive for three decades?',
  'Correct! I\m still in my mid twenties',
  'How rude! No! :('));
questions.push (new Question(true, 'Is Brent a bit obssessed with the number three?',
  'Obviously! Someone noticed the pattern to these questions. Good job! :)',
  'Actually, I am. That\'s why all these questions are about the number three.'));
console.log ('fully constructed questions array',questions);

//Uncomment on submission. Skipping while building.
// for (var i = 0; i < questions.length; i++){
//   questions[i].checkUserAnswer(questions[i].getUserAnswer());
//   console.log('looping through the array', i);
// }
var userCorrect = false;
var userInput = 3;
var classCode = new Question ('121', 'What was the course number of Brent\'s first coding course',
  'Yes. cpts 121 at WSU.', 'nope! HINT: thee digit integer.');
for (var j = 0; j < 4; j++){
  userInput = prompt (classCode.question).toLowerCase ();
  if (userInput === classCode.answer){
    userCorrect = true;
    alert (classCode.successMessage);
    correctAnswers++;
    j = 4;
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
var chessQuestion = new Question(topUsChessPlayers, 'Brent loves chess. Can you name one of the top US chess players? Use only the last name, spelling will count.',
'Congratulations! You know your chess players!', 'Nope!');
userCorrect=false;
userInput = 3;
var l = 1;
while (!userCorrect && l <=6) {
  userInput = prompt (chessQuestion.question).toLowerCase ();
  for (var k = 0; k < topUsChessPlayers.length; k++)
  {
    console.log('Checking user guess of player:', userInput, 'vs', topUsChessPlayers[k]);
    if (userInput ===  chessQuestion.answer[k]) {
      userCorrect = true;
      l = 10;
      k = topUsChessPlayers.length;
      correctAnswers++;
      alert (chessQuestion.successMessage);
    }
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
