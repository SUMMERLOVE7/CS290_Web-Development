/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Min Ji Chang
 * Email: changmin@oregonstate.edu
 */

var showModal = document.getElementById('sell-something-button')
var removeModal_1 = document.getElementById('modal-cancel')
var removeModal_2 = document.getElementById('modal-close')
var createPost = document.getElementById('modal-accept')
var des = document.getElementById('post-text-input')
var photo = document.getElementById('post-photo-input')
var price = document.getElementById('post-price-input')
var city = document.getElementById('post-city-input')
var condition = document.getElementsByName('post-condition')

function openModal(){
    document.getElementById('modal-backdrop').style.display = "block"
    document.getElementById('sell-something-modal').style.display = "block"
    document.getElementById('sell-something-modal').classList.add("show") 
}

function closeModal(){
    document.getElementById('modal-backdrop').style.display = "none"
    document.getElementById('sell-something-modal').style.display = "none"
    document.getElementById('sell-something-modal').classList.remove("show") 
    
    des.value = ''
    photo.value = ''
    price.value = ''
    city.value = ''
    
    for(var i = 0; i< condition.length; i++){
        condition[i].checked = false
    }
    condition[0].checked = true
}

showModal.onclick = function(event){
    openModal()
}

removeModal_1.onclick = function(event){
    closeModal()
}

removeModal_2.onclick = function(event){
    closeModal()
}


var newClass = document.createAttribute("class")

function registerPost(){
       /*
    const newDes = des.value
    const newPhoto = photo.value
    const newPrice = price.value
    const newCity = city.value
    

    var newDiv = document.createElement("div")
    var subject = document.querySelector('.filter-input')
    var newinfo = document.createTextNode(subject.value)

    newItem.appendChild(newinfo)
    var itemList = document.querySelector('.filter-container')
    itemList.appendChild(newItem)

    */
    var newDiv = document.createElement("div")
    //var newPost = document.createAttribute("post")
    var newDataPrice = document.createAttribute("data-price")
    var newDataCity = document.createAttribute("data-city")
    var newDataCondition = document.createAttribute("data-condition")

    var newPostContents = document.createAttribute("post-contents")

    newClass.value = "post"
    newDataPrice = price.value
    newDataCity = city.value
    newDataCondition = '미완'

    newDiv.setAttributeNode(newClass)
    newDiv.setAttributeNode(newDataPrice)
    newDiv.setAttributeNode(newDataCity)
    newDiv.setAttributeNode(newDataCondition)

    var newDiv2  = document.createElement("div")
    newClass.value = "post-contents"
    newDiv2.setAttributeNode(newClass)
    newDiv.appendChildNode(newDiv2)

    var newDiv3 = document.createElement("div")
    newClass.value = "post-image-container"
    newDiv3.setAttributeNode(newClass)
    newDiv2.appendChild(newDiv3)

    var newPhoto = document.createElement("img")
    var srcNode = document.createAttribute("src")
    var altNode = document.createAttribute("alt")
    srcNode.value = photo.value
    altNode.value = des.value
    newPhoto.setAttributeNode(srcNode)
    newPhoto.setAttributeNode(altNode)

    newDiv3.appendChild(newPhoto)

    var newDiv4 = document.createElement("div")
    var newA = document.createElement("a")
    var newHref = document.createAttribute("href")
    newHref.value = "#"
    newClass.value = "post-title"
    newA.setAttributeNode(newClass)
    newA.classList.add('post-price')
    newA.classList.add('post-city')
    newDiv4.appendChild(newA)
    newDiv2.appendChild(newDiv4)
    
    document.getElementById('posts').appendChild(newDiv)


}

createPost.onclick = function(event){
    console.log('click')
    registerPost()
    console.log('complete')
    closeModal()
}

