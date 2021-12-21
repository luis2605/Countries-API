const modBtn = document.getElementById("mod-btn")
const containerBox = document.getElementById("container-box")
const inputFieldBox = document.getElementById("input-field-box")
const continents = document.getElementById("continents")
const darkModeIcon= document.getElementById("darkmode-icon")
let containerForDisplayInfo = document.getElementById("container-elements")




const search = document.getElementById("search")


// togglin' between night mode and normal

modBtn.addEventListener("click",function(){


containerBox.classList.toggle("dark-mode")
inputFieldBox.classList.toggle("dark-mode")
continents.classList.toggle("dark-mode")

changingMods()
})


 function changingMods () {
if(containerBox.classList.contains("dark-mode")){
    modBtn.innerHTML=` <img
    id="darkmode-icon"
    class="mod-icon"
    src="img/outline_wb_sunny_white_24dp.png"
  /> Normal Mode`

  

}else {
    modBtn.innerHTML = ` <img
    id="darkmode-icon"
    class="mod-icon"
    src="img/outline_nightlight_round_black_24dp.png"
  /> Night Mode`
   
}
 }

 // fetching the data  per name
search.addEventListener("click",function() {
 
 let nameField = document.getElementById("input-field-box").value
 let countryDisplayBox = document.getElementById("country-display-box")
 

 console.log(nameField)
    fetch(`https://restcountries.com/v3.1/name/${nameField}`)
    .then(res => res.json())
   
    .then(data => {
        

        console.log(data)
countryDisplayBox.innerHTML =`
<a href="#"  id="selector-single-page"><img  src="${data[0].flags.png}"/></a>
<h2>${data[0].name.common}</h2>
<p>Population :${data[0].population}</p>
<p>Subregion :${data[0].subregion}</p>
<p>Capital :${data[0].capital}</p>

`

countryDisplayBox.addEventListener("click", function(){

containerForDisplayInfo.innerHTML = `
<img  class="coat-of-arms" src="${data[0].coatOfArms.png}"/>
<a href="#"  class="flag"  id="selector-single-page"><img  src="${data[0].flags.png}"/></a>
<h2>${data[0].name.common}</h2>
<p>Population :${data[0].population}</p>
<p>Subregion :${data[0].subregion}</p>
<p>Capital :${data[0].capital}</p>
<p>Top Level Domain : ${data[0].tld}</p>
<p>Map :  <a href=" ${data[0].maps.googleMaps}">click here</a></p>

`
const backContainer = document.getElementById("back-container")
const backBtn = document.getElementById("back-btn")
backContainer.classList.add("visible")

backBtn.addEventListener("click",function(){

location.reload()

})

})
      
    })
   

  

    
  
 
})


 // fetching the data  per region
function changingContinents() {
    let selectedContinent = document.getElementById("continents").value
    let continentsDisplayBox = document.getElementById("continents-display-box")
   
   

    console.log(selectedContinent)
       fetch(`https://restcountries.com/v3.1/region/${selectedContinent}`)
       .then(res => res.json())
      
       .then(data => {

           console.log(data)
    continentsDisplayBox.innerHTML=""
    continentsDisplayBox.innerHTML +=`<h1 class="title-continent">${selectedContinent}</h1>`
           for(let i=0 ; i< 100 ;i++){
     
     continentsDisplayBox.innerHTML += `
    
     <a href="#" id="selector-single-page"><img  src="${data[i].flags.png}"/></a>
     <h2>${data[i].name.common}</h2>
     <p>Population :${data[i].population}</p>
     <p>Subregion :${data[i].subregion}</p>
     <p>Capital :${data[i].capital}</p>`
           


           }
           
         
     
   
    })
   
}