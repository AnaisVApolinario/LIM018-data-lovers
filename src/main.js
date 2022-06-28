import { example } from './data.js';//./es busca a partir de la carpeta data.js
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js'; //data es una variable de tipo objeto 

console.log(example);//example,data
//LIBROS
const seccion=document.querySelector('.container-libros');
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


//POCIONES
const contenedor=document.querySelector('.container-pociones');
const tempPo=document.getElementById('template-pociones').content;
const fragme=document.createDocumentFragment();
const arrayPociones=data.potions;

arrayPociones.forEach(el =>{
  tempPo.querySelector('#p-pociones').textContent=el.name;  
  tempPo.querySelector('#p-descripcion').textContent=el.description;  
  const clon=tempPo.cloneNode(true);
  fragme.appendChild(clon);
});
contenedor.appendChild(fragme);


let inicio=document.getElementById('inicio')
let characters=document.getElementById('characters');
let  btnpersonajes=document.getElementById('personajes');
let contenido=document.getElementById('content');
let logo=document.getElementById('logo');
let lib=document.querySelector('.container-libros');
let btn_libro=document.getElementById('libros');
let lista_pociones =document.querySelector('.container-pociones');
let po=document.getElementById('pociones');
let mostrarPersonajes=document.getElementById('mostrarPersonajes')

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
  contenido.style.display='none';
  lista_pociones.style.display='none';
})}
po.addEventListener('click',function(){
  lista_pociones.style.display='block';
  lib.style.display='none';
  characters.style.display='none';     
  contenido.style.display='none';
})

let personajes = data.characters.sort((a, b) => a.img ? -1 : b.img ? 1 : 0)
//
function agregarElementos() {
    personajes.forEach(function (data) {
        let divM=document.createElement('div')
            divM.className +="inner"
        let divG = document.createElement('div')
            divG.className += " front"
        let divL = document.createElement('div')
            divL.className +=  "back"
        let img = document.createElement('img')
        let name = document.createElement('p')
        let species = document.createElement('p')
        let gender = document.createElement('p')
        let birth = document.createElement('p')
        let house = document.createElement('p')
        let book = document.createElement('p')
        let ancestry = document.createElement('p')
        characters.appendChild(divM)
        divM.appendChild(divG)
        divM.appendChild(divL)

        for (let i=0; i<data.img.length;i++){
          img.setAttribute('src', data.img)
            divG.appendChild(img)
            name.innerText = data.name
            birth.innerText = "Fecha_Nac: " + data.birth
            species.innerText = "Especie: " + data.species
            gender.innerText = "Genero: " + data.gender
            house.innerText = "Casa: " + data.house
            book.innerText = "Libros: " + data.books_featured_in
            ancestry.innerText = "Magico: " + data.ancestry
            divG.appendChild(name)
            divL.appendChild(species)
            divL.appendChild(gender)
            divL.appendChild(birth)
            divL.appendChild(house)
            divL.appendChild(book)
        }
      })
    }
    
agregarElementos();

characters.addEventListener('click',()=>{
  characters.classList.toggle('active')
})
