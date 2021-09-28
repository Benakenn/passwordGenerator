document.getElementById('generate').addEventListener('click', event => {
  event.preventDefault()

  let length = prompt('Pick a number between 8 - 128 for your password length.')
    while (length < 8 || length > 128) {
      alert('Please enter correct amount')
      length = prompt('Pick a number between 8 - 128 for your password length.')
    }
  
  let lowercaseRes = confirm('Lowercase characters?')
  let uppercaseRes = confirm('Uppercase characters?')
  let numericRes = confirm('Numeric characters?')
  let specialRes = confirm('Special characters?')
     
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numeric = '1234567890'
  const special = '!@#$%&*'

  let tempPass = ''

  let randomPass = ''

  if (lowercaseRes) {
    tempPass += lowercase
  }

  if (uppercaseRes) {
    tempPass += uppercase
  }

  if (numericRes) {
    tempPass += numeric
  }

  if (specialRes) {
    tempPass += special
  }

  for (let i = 0; i < length; i++) {
    randomPass += tempPass[Math.floor(Math.random() * tempPass.length)]
  }

  document.getElementById('password').textContent = randomPass

})