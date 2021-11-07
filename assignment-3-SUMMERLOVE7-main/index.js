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
var updateButton = document.getElementById('filter-update-button')
var filterTxt = document.getElementById('filter-text')
var title = document.getElementsByClassName('post-title')
var post = document.getElementsByClassName('post')

function openModal(){
    document.getElementById('modal-backdrop').style.display = "block"
    document.getElementById('sell-something-modal').style.display = "block"
    document.getElementById('sell-something-modal').classList.add("show")
    
    des.value = ''
    photo.value = ''
    price.value = ''
    city.value = ''
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

function registerPost(){

    var newDiv = document.createElement("div")
    var newClass = document.createAttribute("class")

    newClass.value = "post"
    newDiv.setAttributeNode(newClass)

    for(var i = 0; i< condition.length; i++){
        if(condition[i].checked == true){
            var newCondition = document.createTextNode(condition[i].value)
        }
    }

    var dataPrice = document.createAttribute('data-price')
    var dataCity = document.createAttribute('data-city')
    var dataCondition = document.createAttribute('data-condition')
    dataPrice.value = price.value
    dataCity.value = city.value
    dataCondition.value = newCondition.value
    newDiv.setAttributeNode(dataPrice)
    newDiv.setAttributeNode(dataCity)
    newDiv.setAttributeNode(dataCondition)

    var newDiv2  = document.createElement("div")
    var newClass2 = document.createAttribute("class")
    newClass2.value = "post-contents"
    newDiv2.setAttributeNode(newClass2)
    newDiv.appendChild(newDiv2)

    var newDiv3 = document.createElement("div")
    var newClass3 = document.createAttribute("class")
    newClass3.value = "post-image-container"
    newDiv3.setAttributeNode(newClass3)
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
    var newClass4 = document.createAttribute("class")
    var newA = document.createElement("a")
    var newHref = document.createAttribute("href")
    var newClass5 = document.createAttribute("class")
    newHref.value = "#"
    newClass5.value = "post-title"
    newA.setAttributeNode(newHref)
    newA.setAttributeNode(newClass5)

    var newSpan = document.createElement("span")
    var newClass6 = document.createAttribute("class")
    newClass6.value = 'post-price'
    newSpan.setAttributeNode(newClass6)

    var newSpan2 = document.createElement("span")
    var newClass7 = document.createAttribute("class")
    newClass7.value = "post-city"
    newSpan2.setAttributeNode(newClass7)

    newClass4.value = "post-info-container"
    newDiv4.setAttributeNode(newClass4)
    newDiv4.appendChild(newA)
    newA.append(document.createTextNode(des.value))
    newDiv4.appendChild(newSpan)
    newSpan.append('$')
    newSpan.append(document.createTextNode(price.value))
    newDiv4.appendChild(newSpan2)
    newSpan2.append('(')
    newSpan2.append(document.createTextNode(city.value))
    newSpan2.append(')')

    newDiv2.appendChild(newDiv4)

    document.getElementById('posts').appendChild(newDiv)
    
}

function textFilter(){
    //var textArray = []
    /*
    for(var i =0; i<des.value.length; i++){
        textArray[i] = des.value.split('')
    }
    */
   console.log(filterTxt.value)

   var textArray = filterTxt.value.split('')
   for(var i = 0; i< textArray.length; i++){
       console.log(textArray[i])
   }

   var titleValue= title.value.toLocaleLowerCase()

   for(var i = 0; i< post.length; i++)
   if(titleValue.includes(filterTxt.value)){
        post[i].style.display= "flex"
   }
   else{
       post[i].style.display = 'none'
   }
       
   
}

createPost.onclick = function(event){

    if(!des.value || !price.value || !city.value){
        alert("invalid input!")
   }
   else{
       registerPost()
       closeModal()
   }
}

updateButton.onclick = function(event){
    console.log('click')
    textFilter()
}