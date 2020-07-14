const startTheGame = document.getElementById('start');

const game = document.getElementById('game');

const quise = document.getElementById('quise-wrapper');

const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');


const end = document.getElementById('end_wrapper');

const resultWrapper = document.getElementById('result_wrapper');
const result = document.getElementById('result');



let num;
let theCorrectAnswer;
let  array1 = ['001', '002', '003', '004', '005', '006', '007'];
let  array2;
let max = 6;
let score = 0;

function start() {
  console.log('Start The Game');
  
  startTheGame.style.display = 'none';
  game.style.display = 'block';
  displayChoicesNumAya();
  theCorrectAnswer = randomChoice();
  theAnswer(theCorrectAnswer);
  theCorrectAnswer.innerHTML = num;
  getTheIndex()
  quise.innerHTML = Al_Fatiha[index].question;
  
  console.log(num);
}

function choice(A) {
  
  displayChoicesNumAya();
  theCorrectAnswer = randomChoice();
  theCorrectAnswer.innerHTML = num;
  getTheIndex()
  quise.innerHTML = Al_Fatiha[index].question;
  checkTheAnswer(A, answer);
  theAnswer(theCorrectAnswer);
  theEnd();
  
  console.log(num);
}

function resultF(){
  resultWrapper.style.display = 'none';
  end.style.display = 'flex';
}




function theEnd() {
  if (num == undefined) {
    console.log('End Of The Game');
    game.style.display = 'none';
    resultWrapper.style.display = 'flex';
    if (score == 0) {
      resultWrapper.innerHTML += '<img src="./IMG/1.png" />';
    }
    if (score == 1) {
      resultWrapper.innerHTML += '<img src="./IMG/2.png" />';
    }
    if (score == 2) {
      resultWrapper.innerHTML += '<img src="./IMG/3.png" />';
    }
    if (score == 3) {
      resultWrapper.innerHTML += '<img src="./IMG/4.png" />';
    }
    if (score >= 4) {
      resultWrapper.innerHTML += '<img src="./IMG/5.png" />';
    }
  }
}

function displayChoicesNumAya() {
  let numOfAya = [];
  let randomIntex = randomNNum(0, max);
  array2 = ['001', '002', '003', '004', '005', '006', '007'];
  num = array1[randomIntex];
  array1.splice(randomIntex, 1);
  checkForIndexNumAndDeleteIt(num, array2);
  fillArray(numOfAya, array2);
  choiceA.innerHTML = numOfAya[0];
  choiceB.innerHTML = numOfAya[1];
  choiceC.innerHTML = numOfAya[2];
  choiceD.innerHTML = numOfAya[3];
  refresh();
  
}

function checkForIndexNumAndDeleteIt(num, array) {
  let lastIndex = array.length-1;
  let index;
  for (let i = 0; i <= lastIndex; i++) {
    switch (num) { 
      case array[i]: 
        array.splice(i, 1);
        index = i;
        break; 
    }
  }
}

function fillArray(arrayX, arrayY) {
  let lengthArrayY = arrayY.length - 1;
  for (let i = 1; i <= 4; i++) {
    randomIntex = randomNNum(0, lengthArrayY);
    arrayX.push(arrayY[randomIntex]);
    arrayY.splice(randomIntex, 1);
    lengthArrayY--;
  }
}

function refresh() {
  if (max > 0) {
    max--;
  }else {
    max = 6;
    /*
    array1 = ['001', '002', '003', '004', '005', '006', '007'];
    */
  }
}

function randomChoice() {
  let nums = randomNNum(1, 4);
  switch (nums) {
    case 1:
      return choiceA;
      break;
    case 2:
      return choiceB;
      break;
    case 3:
      return choiceC;
      break;
    case 4:
      return choiceD;
      break;
  }
}

function getTheIndex() {
  let aya;
  for (let i = 0; i <= 6; i++) {
    aya = Al_Fatiha[i].answer;
    if (aya == num) {
      index = i;
    }
  }
}

function theAnswer(choice) {
  switch (choice) {
    case choiceA:
      answer = 'A';
      break;
    case choiceB:
      answer = 'B';
      break;
    case choiceC:
      answer = 'C';
      break;
    case choiceD:
      answer = 'D';
      break;
      return answer;
  }
}

function checkTheAnswer(A, answer) {
  if (A == answer) {
    answerIsCorrect();
  } else {
    answerIsWrong();
  }
}

function answerIsCorrect() {
  console.log('Answer Is Correct');
  result.innerHTML += '<p>صحيح</p>';
  score++;
}

function answerIsWrong() {
  console.log('Answer Is Wrong');
  result.innerHTML += '<p>خطأ</p>';
}

function arrayOfNumAya() {
  let array = [];
  for (let i = 1; i <= 7; i++) {
    array.push('00' + i)
  }
  return array
}

function randomNNum(mini, maxi) {
  var betw = (maxi - mini) + 1;
  return Math.floor(Math.random() * betw) + mini;
}

function Test(A) {
  switch (A) {
    case 'A':
      console.log('A');
      break;
    case 'B':
      console.log('B');
      break;
    case 'C':
      console.log('C');
      break;
    case 'D':
      console.log('D');
      break;
  }
}