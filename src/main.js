import { example } from './data.js';//./es busca a partir de la carpeta data.js
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js'; //data es una variable de tipo objeto 

console.log(example);//example,data


const seccion=document.getElementById('container-libros');
const tempArticle=document.getElementById('template-libros').content;//accede a los elementos osea a su contenido
const fragment=document.createDocumentFragment();//guarda codigo en una memoria volatil y no lo pinta en el HTML hasta que se lo digamos
const arrayLibros=data.books;
arrayLibros.forEach(item =>{
  tempArticle.querySelector('img').setAttribute('src',item.img);
  tempArticle.querySelector('img').setAttribute('alt',item.title); 
  tempArticle.querySelector('#titulo').textContent=item.title;
  tempArticle.querySelector('#parrafo').textContent='Lanzamiento: '+item.releaseDay;
  tempArticle.querySelector('#parrafo1').textContent='Autor: '+ item.author;
  tempArticle.querySelector('#parrafo2').textContent='Desripcion: '+ item.description ;
    
  const clone=tempArticle.cloneNode(true);
  fragment.appendChild(clone);
});
seccion.appendChild(fragment);

const ul=document.getElementById('ul');
const tempPo=document.getElementById('template-pociones').content;
const fragme=document.createDocumentFragment();
const arrayPociones=data.potions;

arrayPociones.forEach(el =>{
  tempPo.querySelector('#li').textContent=el.name;  
  const clon=tempPo.cloneNode(true);
  fragme.appendChild(clon);
});
ul.appendChild(fragme);







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


