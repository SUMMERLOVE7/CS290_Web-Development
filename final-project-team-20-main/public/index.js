// index.js file (client side javascript)
// by Ella Riis, Javier Garcia, Min Ji Chang, and Cyrus Shafizadeh

window.onload = function() {
  calculateRoll();
};

var addButton = document.getElementById('add-dice');
var removeButton = document.getElementById('remove-dice');
var rollButton = document.getElementById('roll');
var diceList = document.querySelector('section');
var diceImgs = document.getElementById('diceImg');
var numDice = 6;

console.log(diceImgs);

  var d1 = diceList.firstElementChild;
  var d2 = d1.nextElementSibling;
  var d3 = d2.nextElementSibling;
  var d4 = d3.nextElementSibling;
  var d5 = d4.nextElementSibling;
  var d6 = d5.nextElementSibling;

  console.log(d1);

  var imgs = [
    d1.getAttribute('data-src'),
    d2.getAttribute('data-src'),
    d3.getAttribute('data-src'),
    d4.getAttribute('data-src'),
    d5.getAttribute('data-src'),
    d6.getAttribute('data-src')
  ]
  for (var i = 1; i < 6; i++)
    removeDice();
  fullDiceRoll();

//Random int function found on this website:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function fullDiceRoll() {
  console.log("roll");
  var constNumDice = numDice;
  for (var i = 0; i < constNumDice; i++) {
    diceList.removeChild(diceList.lastChild);
    diceList.removeChild(diceList.lastChild);
  }
  numDice = 0;
  for (var i = 0; i < constNumDice; i++) {
    addDice();
  }

  numDice = constNumDice;
  var sum_roll = calculateRoll();
  console.log(sum_roll);
}

function addDice(){
  var diceImageSource = getRandomIntInclusive(1, 6);
  var url = imgs[diceImageSource - 1];
  var context = {
    value: diceImageSource,
    photoURL: url
  }

  var newDice = Handlebars.templates.diceImage(context);
    diceList.insertAdjacentHTML('beforeend', newDice);

	numDice++;
  calculateRoll();
}

function removeDice(){

  if(numDice == 1){
    alert("Must have at least one die")
  }
  else{
    diceList.removeChild(diceList.lastChild);
    diceList.removeChild(diceList.lastChild);
    numDice--;
    calculateRoll();
  }
}

function calculateRoll() {
  var total = 0;
  var cur = diceList.firstElementChild;
  for (var i = 0; i < numDice; i++) {
    total += Number(cur.getAttribute('data-value'));
    cur = cur.nextElementSibling;
  }
  total = "Total: " + total;
  document.getElementById('total-roll').innerHTML = total;
  return total;
}

rollButton.addEventListener('click', fullDiceRoll);
addButton.addEventListener('click', addDice);
removeButton.addEventListener('click', removeDice);
