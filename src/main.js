//import { example } from './data.js';//./es busca a partir de la carpeta data.js
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js'; //data es una variable de tipo objeto 

//console.log(example);//example,data

let inicio = document.getElementById('inicio')
let characters = document.getElementById('characters')
let btnpersonajes = document.getElementById('personajes')
let content = document.getElementById('content')
let logo = document.getElementById('logo')
let book = document.getElementById('libros')
let containerBook = document.querySelector('template-libros')
window.addEventListener('load', init)
function init() {
    inicio.style.visibility = 'visible'
    characters.style.visibility = 'hidden'
    btnpersonajes.addEventListener('click', function () {
        characters.style.visibility = 'visible'
        content.style.visibility = 'hidden'
    }),
        logo.addEventListener('click', function () {
            content.style.visibility = 'visible'
            characters.style.visibility = 'hidden'
        }),
        book.addEventListener('click', function () {
            containerBook.style.visibility = 'visible'
            characters.style.visibility = 'hidden'
            content.style.visibility = 'hidden'
        })
}

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


let personajes = data.characters.sort((a, b) => a.img ? -1 : b.img ? 1 : 0)
//
function agregarElementos() {
    personajes.forEach(function (data) {
        let divG = document.createElement('div')
        let divL = document.createElement('ul')
        let img = document.createElement('img')
        let name = document.createElement('p')
        let species = document.createElement('li')
        let gender = document.createElement('li')
        let birth = document.createElement('li')
        let house = document.createElement('li')
        let book = document.createElement('li')
        let ancestry = document.createElement('li')
        characters.appendChild(divG)
        characters.appendChild(divL)

        if (data.img) {
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

/*
let personajes = data.characters.sort((a, b) => a.img ? -1 : b.img ? 1 : 0)
//
function agregarElementos() {
    personajes.forEach(function (data) {
        let divG = document.createElement('div')
        let divL = document.createElement('ul')
        let img = document.createElement('img')
        let name=document.createElement('p')
        let species=document.createElement('li')
        let gender=document.createElement('li')
        let birth=document.createElement('li')
        let house=document.createElement('li')
        let group=document.createElement('li')
        let book=document.createElement('li')
        let ancestry=document.createElement('li')
        characters.appendChild(divG)
        characters.appendChild(divL)
      
        if (data.img ) {
            img.setAttribute('src', data.img)
            divG.appendChild(img)
        } 
        else if(data.associated_groups) {
            group.innerText = "Grupo:"+data.associated_groups
            divL.appendChild(group)
            
        
        }
        name.innerText = data.name
        birth.innerText = "Fecha_Nac: " + data.birth
        species.innerText = "Especie: "+data.species
        gender.innerText = "Genero: "+data.gender
        house.innerText = "Casa: "+ data.house
        book.innerText = "Libros: " + data.books_featured_in
        ancestry.innerText = "Magico: "+data.ancestry
        divG.appendChild(name)
        divL.appendChild(species)
        divL.appendChild(gender)
        divL.appendChild(birth)
        divL.appendChild(house)
        divL.appendChild(book)
    })
}
agregarElementos();
*/
