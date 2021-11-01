//var photoCardContainer = document.getElementsByID("photo-card-container")

function insertNewPhotoCard(photoUrl, caption){
    var photoCardSection = document.createElement("section")
    photoCardSection.classList.add('photo-card')
    photoCardSection.classList.add('another-calss')
    photoCardSection.classList.add('yet-another-class')

    photoCardSection.classList.remove('another-class')

    var imgContainerDiv = document.createElement('div')
    imgContainerDiv.classList.add('img-container')
    photoCardSection.appendChild(imgContainerDiv)

    var personPhotoImg = document.createElement('img')
    personPhotoImg.classList.add('person-photo-img')
    personPhotoImg.src = photoUrl
    imgContainerDiv.appendChild(personPhotoImg)

    console.log("== photoCardSection: ", photoCardSection)

    var photoCardContainer = document.getElementsByID("photo-card-container")
    photoCardContainer.appendChild(photoCardSection)
}

insertNewPhotoCard("http://placekitten.com/480/480", "Luke as a kitty")

