document.getElementById('my-btn').addEventListener('click', myFunction)
function myFunction () {
  let age = document.getElementById('my-text').value
  age = parseInt(age)
  if (age === '15') {
    alert('congratulations you guessed right!')
  } else {
    alert('Sorry you guessed worng:( better luck next time!')
  }
}
