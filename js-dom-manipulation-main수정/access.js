console.log("== document:", document)
console.log("== document.body:", document.body)

var body = document.body
console.log("== body.childNodes:", body.childNodes)
console.log("== body.childNodes[1]:", body.childNodes[1])
console.log("== body.firstChild:", body.firstChild)
console.log("== body.firstElementChild:", body.firstElementChild)

var header = body.firstElementChild
console.log("== header.parentNode:", header.parentNode)

var photoCardContainer = document.getElementById('photo-card-container')
console.log("== photoCardContainer:", photoCardContainer)

var photoCards = document.getElementsByClassName('photo-card')
console.log("== photoCards:", photoCards)

for (var i = 0; i < photoCards.length; i++) {
  console.log("== photoCards[" + i + "]:", photoCards[i])
  // if (i === 1) {
  //   photoCards[i].remove()
  // }
}

var links = document.getElementsByTagName('a')
console.log("== links:", links)

var rightNavitem = document.querySelector('.navitem.right')
console.log("== rightNavitem:", rightNavitem)

var navitems = document.querySelectorAll('.navitem')
console.log("== navitems:", navitems)

var firstPhotoCard = photoCards[0]
console.log("== firstPhotoCard:", firstPhotoCard)

console.log("== firstPhotoCard.textContent:", firstPhotoCard.textContent)
console.log("== firstPhotoCard.innerHTML:", firstPhotoCard.innerHTML)

console.log("== links[0].href:", links[0].href)

var firstImg = document.querySelector('img')
console.log("== firstImg.src:", firstImg.src)

// firstPhotoCard.textContent = "Hello!"
// firstPhotoCard.innerHTML = "<img src='http://placekitten.com/480/480?image=6'/>"

var userSuppliedValue = "Hello, CS 290!"
var maliciousUserSuppliedValue = "<img src=x onerror='alert(\"You were hacked 🤬\")'/>"
// firstPhotoCard.innerHTML = "<div class='caption'>" + maliciousUserSuppliedValue + "</div>"
firstPhotoCard.textContent = maliciousUserSuppliedValue
