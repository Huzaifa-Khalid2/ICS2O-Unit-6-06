document.getElementById('my-btn').addEventListener('click', myFunction)
function myFunction () {
  let myage = 1
  myage = document.getElementById('my-text').value
  myage = parseInt(myage) 
  yourguess = document.getElementById('my-text').value
  yourguess = parseInt(yourguess)
  while (myage <= yourguess) { 
  alert('Horray :) you guessed right!') 
  myage++;
  } else {
    alert('You guessed wrong:( better luck next time')
  }
  }
