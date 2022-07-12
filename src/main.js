import { pociones_ordenadas } from './data.js';//./es busca a partir de la carpeta data.js
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js'; //data es una variable de tipo objeto 

//example,data
//LIBROS
const seccion = document.getElementById('c_libro');
const tempArticle = document.getElementById('template-libros').content;//accede a los elementos osea a su contenido
const fragment = document.createDocumentFragment();//guarda codigo en una memoria volatil y no lo pinta en el HTML hasta que se lo digamos
const arrayLibros = data.books;

arrayLibros.forEach(item => {
  tempArticle.querySelector('img').setAttribute('src', item.img);
  tempArticle.querySelector('img').setAttribute('alt', item.title);
  tempArticle.getElementById('titulo-libro').textContent = item.title;
  tempArticle.getElementById('parrafo').innerHTML = `<b>LANZAMIENTO:</b> ${item.releaseDay}`;
  tempArticle.getElementById('parrafo1').innerHTML = `<b>AUTOR:</b> ${item.author} `;
  tempArticle.getElementById('parrafo2').innerHTML = `<b>DESCRIPCION:</b> ${item.description}`;

  const clone = tempArticle.cloneNode(true);
  fragment.appendChild(clone);
});
seccion.appendChild(fragment);


//POCIONES
const contenedor = document.getElementById('c_pocion');
const tempPo = document.getElementById('template-pociones').content;
const fragme = document.createDocumentFragment();
const arrayPociones = data.potions;

arrayPociones.forEach(el => {
  tempPo.querySelector('#p-pociones').textContent = el.name;
  tempPo.querySelector('#p-descripcion').textContent = el.description;
  const clon = tempPo.cloneNode(true);
  fragme.appendChild(clon);
});
contenedor.appendChild(fragme);
//MENU DE NAVEGACION
const log = document.querySelector('.logo');
const inicio = document.querySelector('.inicio');
const contenedor_li = document.querySelector('.ul')
const characters = document.getElementById('characters');
const lib = document.getElementById('c_libro');
const poci = document.getElementById('c_pocion');
const filtrarUnidad = document.querySelector('.container-order');
/*window.addEventListener("load",init)*/
function init() {
  characters.style.display = 'none';
  lib.style.display = 'none';
  poci.style.display = 'none';
  filtrarUnidad.style.display = 'none';
}
function ocultarInicio() {
  inicio.style.display = 'none';
}
contenedor_li.addEventListener('click', (e) => {
  if (e.target) {
    if (e.target.matches('a[href="#characters"]')) {
      ocultarInicio();
      characters.style.display = 'flex';
      lib.style.display = 'none';
      poci.style.display = 'none';
      filtrarUnidad.style.display = 'none';
    }
    else if (e.target.matches('a[href="#c_libro"]')) {
      ocultarInicio();/*inicio.classList.add('ocultar');*/
      characters.style.display = 'none';
      lib.style.display = 'flex';
      poci.style.display = 'none';
      filtrarUnidad.style.display = 'none';

    }
    else if (e.target.matches('a[href="#c_pocion"]')) {
      ocultarInicio();/*inicio.classList.add('ocultar');*/
      characters.style.display = 'none';
      lib.style.display = 'none';
      poci.style.display = 'flex';
      filtrarUnidad.style.display = "block";
    }
  }
});
log.addEventListener('click', (ev) => {
  if (ev.target) {
    inicio.style.display = 'block';
    init();
  }
});
//Botones de la AZ
/*const za=document.getElementById('za');
//const az=document.getElementById('az');
za.addEventListener('click',()=>{
  pociones_ordenadas();
})*/

const grupoAZ = document.querySelector('.AZ');
grupoAZ.addEventListener('click', (e) => {
  if (e.target.id === "za") {
    pociones_ordenadas();
  }
  if (e.target.id === "az") {
    console.log("soyAZ")
  }
})
//PERSONAJES

//let personajes = data.characters.sort((a, b) => a.img ? -1 : b.img ? 1 : 0)
//
function agregarElementos(personajes) {

  personajes.forEach(function (personaje) {
    let card = document.createElement('div')
    card.className += "card"
    let inner = document.createElement('div')
    inner.className += "inner"
    let front = document.createElement('div')
    front.className += " front"
    let back = document.createElement('div')
    back.className += "back"
    let img = document.createElement('img')
    let name = document.createElement('p')
    let species = document.createElement('p')
    let gender = document.createElement('p')
    let birth = document.createElement('p')
    let house = document.createElement('p')
    let book = document.createElement('p')
    let ancestry = document.createElement('p')
    /*characters.appendChild(card)
    card.appendChild(inner)
    inner.appendChild(front)
    inner.appendChild(back)*/
    if (personaje.img) {
      characters.appendChild(card)
      card.appendChild(inner)
      inner.appendChild(front)
      inner.appendChild(back)
      img.setAttribute('src', personaje.img)
      front.appendChild(img)
      name.innerText = personaje.name
      birth.innerText = "Fecha_Nac: " + personaje.birth
      species.innerText = "Especie: " + personaje.species
      gender.innerText = "Genero: " + personaje.gender
      house.innerText = "Casa: " + personaje.house
      book.innerText = "Libros: " + personaje.books_featured_in
      ancestry.innerText = "Magico: " + personaje.ancestry
      front.appendChild(name)
      back.appendChild(species)
      back.appendChild(gender)
      back.appendChild(birth)
      back.appendChild(house)
      back.appendChild(book)
    }
  })
}

agregarElementos(data.characters.sort((a, b) => a.img ? -1 : b.img ? 1 : 0));

let selectHouse = document.getElementById("house")
let selectSpecies = document.getElementById("specie")
let selectBooks =document.getElementById("books")
//let filtro = document.getElementById("filter")
function constOption() {

  let filtros = data.characters
  let casas = []
  let especies = []
  let libros = []

  for (let i = 0; i < filtros.length; i++) {
    //especies=filtros[i].species
    casas.push(filtros[i].house)
    especies.push(filtros[i].species)
    libros.push(filtros[i].books_featured_in)
  }
  let casasUnico = casas.filter((valor, indice) => {
    return casas.indexOf(valor) === indice
  })

  for (let i = 0; i < casasUnico.length; i++) {
    let option = document.createElement("option")
    option.value = casasUnico[i]
    option.text = casasUnico[i]
    selectHouse.appendChild(option)
  }

  let especiesUnico = especies.filter((valor, indice) => {
    return especies.indexOf(valor) === indice

  })

  for (let i = 0; i < especiesUnico.length; i++) {
    let option = document.createElement("option")
    option.value = especiesUnico[i]
    option.text = especiesUnico[i]
    selectSpecies.appendChild(option)

  }

  let librosUnico = libros.filter((valor, indice) => {
    return libros.indexOf(valor) === indice

  })

  for (let i = 0; i < librosUnico.length; i++) {
    let option = document.createElement("option")
    option.value = librosUnico[i]
    option.text = librosUnico[i]
    selectBooks.appendChild(option)

  }
}
constOption();


/*
window.addEventListener('load',mostrarOpciones,false)
function mostrarOpciones(){
  let House=document.querySelector('#house')
  House.classList.add("ocultar")
  let Books=document.querySelector('#books')
  Books.classList.add("ocultar")
  let Species=document.querySelector('#specie')
  Species.classList.add("ocultar")
  let houses=document.querySelector('.houses')
  houses.addEventListener('click',function (event){
    if(House.classList.add("ocultar")){
      House.classList.add("mostrar");
      Books.classList.add("ocultar")
      Species.classList.add("ocultar")
   }
  }, false);
}
*/