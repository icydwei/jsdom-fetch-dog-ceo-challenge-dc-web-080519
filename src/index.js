
const imgUrl = "https://dog.ceo/api/breeds/image/random/6";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function(){


  loadImages()
  loadBreeds()
  filterBreeds()


  })



function loadImages(){
  const imgCont = document.getElementById("dog-image-container");

  fetch(imgUrl)
  .then(response => response.json())
  .then(imageCollection => {
    imageCollection.message.forEach(function (image) {
      var imgEle = document.createElement("IMG")
      imgEle.src = image;
      imgEle.height = 250;
      imgEle.width = 250;
      imgEle.border = 5;
      imgCont.appendChild(imgEle)
    })
  }
)}

function loadBreeds() {
  const breedList = document.getElementById("dog-breeds");
  fetch(breedUrl)
  .then(response => response.json())
  .then(breedCollection => {
    Object.keys(breedCollection.message).forEach(function(breed) {
      var liTag = document.createElement("li")
      liTag.innerText = breed.charAt(0).toUpperCase() + breed.slice(1,-1)
      liTag.addEventListener("click", () => {
        liTag.style.color = "purple";
        liTag.style.fontWeight = "bold";
      })
      breedList.appendChild(liTag)
    })
  })
}

function filterBreeds() {
  const letterSelect = document.getElementById("breed-dropdown");
  letterSelect.addEventListener("change", (e) => {
    console.log("change", e)
  })
}
