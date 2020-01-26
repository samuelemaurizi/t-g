window.addEventListener('load', initialize);

// General
var time = 5;
var timer = time;
var score = 0;
var isPlaying;

// DOM Elements
var wordInput = document.querySelector('#word-input');
var currentWord = document.querySelector('#current-word');
var currentWordContainer = document.querySelector('#current-word-container');
var scoreDisplay = document.querySelector('#score');
var timeDisplay = document.querySelector('#time');
var message = document.querySelector('#message');
var seconds = document.querySelector('#seconds');

var btnStart = document.querySelector('#btn-start');
var btnRestart = document.querySelector('#btn-restart');

var words = [
  'trail',
  'herb',
  'pool',
  'want',
  'governor',
  'officer',
  'nuance',
  'deteriorate',
  'elbow',
  'biography',
  'stubborn',
  'transfer',
  'north',
  'ballot',
  'shower',
  'resignation',
  'war',
  'talented',
  'revenge',
  'potential',
  'grudge',
  'snuggle',
  'maze',
  'prevalence',
  'fault',
  'idea',
  'replacement',
  'upset',
  'deport',
  'pocket'
];

btnRestart.style.display = 'none';
currentWordContainer.style.display = 'none';

function initialize() {
  btnStart.addEventListener('click', init);
}

//// Initialize Game
function init() {
  seconds.innerHTML = time;
  showWord(words);
  wordInput.focus();
  wordInput.addEventListener('keydown', startMatch);
  btnStart.style.display = 'none';
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = timer + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWordContainer.style.display = 'block';
  currentWord.innerHTML = words[randIndex];
}

///// Countdown timer
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
    btnRestart.style.display = 'block';
  }
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!';
    score = -1;
  }
}

// Restart the game
function refreshPage() {
  location.reload();
}
