// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE
var userName = localStorage.getItem('name')
var userNotes = localStorage.getItem('notes')

if (userName) {
  nameSpan.textContent = userName 
}

if (userNotes) {
  textarea.textContent = userNotes
}

formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE

  var userName = nameSpan.textContent 
  localStorage.setItem('name', userName)
  console.log(userName)
  nameSpan.textContent = userName

  var userNotes = textarea.value 
  localStorage.setItem('notes', userNotes)
  console.log(userNotes)
  textarea.textContent = userNotes
  


  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE
  textarea.textContent = ""
  nameSpan.textContent = "Your Name"

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp