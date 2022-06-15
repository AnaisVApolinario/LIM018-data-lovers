import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';



let inicio=document.getElementById('inicio')
let characters=document.getElementById('characters')
let  btnpersonajes=document.getElementById('personajes')
let content=document.getElementById('content')
let logo=document.getElementById('logo')
window.addEventListener('load', init) 
function init(){
inicio.style.visibility='visible'
characters.style.visibility='hidden'
btnpersonajes.addEventListener('click',function(){
    characters.style.visibility='visible'
    content.style.visibility='hidden'
}),
logo.addEventListener('click',function(){
    content.style.visibility='visible'
    characters.style.visibility='hidden'
})
}

let personajes=data.characters

function agregarElementos() {
    personajes.forEach(function (data, index) {
        let linew = document.createElement("li");
        let img = document.createElement('img')
        let contenido = document.createTextNode(data.name + ' ' + data.species + " " + data.gender + " " + data.house + " " + data.birth + " " + data.books_featured_in + ' ' + data.associated_groups);
        characters.appendChild(linew);
        img.setAttribute('src',data.img)
        linew.appendChild(img)
        linew.appendChild(contenido);
        
    })
}

agregarElementos();
/*for (let i = 0; i <= personajes.length; i++) {
    let name = personajes[i].name
    let species = personajes[i].species
    let imgs=personajes[i].img
    document.getElementById("name").innerHTML = name
     console.log(imgs);
    console.log(name);
    console.log(species);
    
}*/
 /*

    let nameP = personajes.map(function (bar) {
        return bar.name 
    })
    document.getElementById("name").innerHTML = nameP   */


//document.querySelector('#characters').innerHTML = JSON.stringify(personajes) 


