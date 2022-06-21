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
  tempArticle.querySelector('#titulo-libro').textContent=item.title;
  tempArticle.querySelector('#parrafo').innerHTML=`<b>LANZAMIENTO:</b> ${item.releaseDay}`;
  tempArticle.querySelector('#parrafo1').innerHTML=`<b>AUTOR:</b> ${item.author} `;
  tempArticle.querySelector('#parrafo2').innerHTML=`<b>DESCRIPCION:</b> ${item.description}`;
    
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
let characters=document.getElementById('characters');
let  btnpersonajes=document.getElementById('personajes');
let contenido=document.getElementById('content');
let logo=document.getElementById('logo');
let lib=document.getElementById('container-libros');
let btn_libro=document.getElementById('libros');
let lista_pociones =document.getElementById('ul');
let po=document.getElementById('pociones');

window.addEventListener('load', init) 
function init(){
  inicio.style.display='block';
  characters.style.display='none';
  lib.style.display='none';
  lista_pociones.style.display='none';
btnpersonajes.addEventListener('click',function(){
  characters.style.display='block';
  contenido.style.display='none';
  lib.style.display='none';
  lista_pociones.style.display='none';
}),
logo.addEventListener('click',function(){
  contenido.style.display='block';            
  characters.style.display='none';
  lib.style.display='none';
  lista_pociones.style.display='none';
}),
btn_libro.addEventListener('click',function(){
  lib.style.display='block';
  characters.style.display='none' ;    
  content.style.display='none';
  lista_pociones.style.display='none';
})};
po.addEventListener('click',function(){
  lista_pociones.style.display='block';
  lib.style.display='none';
  characters.style.display='none';     
  content.style.display='none';
})

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


