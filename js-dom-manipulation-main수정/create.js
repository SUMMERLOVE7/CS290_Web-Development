/*
<section class="photo-card">
  <div class="img-container">
    <img class="person-photo-img" src="{{photoUrl}}" />
  </div>
  <div class="caption">
    {{caption}}
  </div>
</section>
*/
function insertNewPhotoCard(photoUrl, caption) {
  var photoCardSection = document.createElement('section')
  photoCardSection.classList.add('photo-card')
  photoCardSection.classList.add('another-class')
  photoCardSection.classList.add('yet-another-class')
  photoCardSection.classList.remove('another-class')

  var imgContainerDiv = document.createElement('div')
  imgContainerDiv.classList.add('img-container')
  photoCardSection.appendChild(imgContainerDiv)

  var personPhotoImg = document.createElement('img')
  personPhotoImg.classList.add('person-photo-img')
  personPhotoImg.src = photoUrl
  imgContainerDiv.appendChild(personPhotoImg)

  var captionDiv = document.createElement('div')
  captionDiv.classList.add('caption')
  captionDiv.textContent = caption
  photoCardSection.appendChild(captionDiv)

  console.log("== photoCardSection:", photoCardSection)

  var photoCardContainer = document.getElementById('photo-card-container')
  photoCardContainer.appendChild(photoCardSection)
  // document.getElementById('photo-card-container').appendChild(photoCardSection)
}

insertNewPhotoCard("http://placekitten.com/480/480", "Luke as a kitty")

var photoCards = document.getElementsByClassName('photo-card')
photoCards[0].remove()
