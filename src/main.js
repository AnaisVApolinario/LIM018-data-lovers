import { pociones_ordenadas} from './data.js';//./es busca a partir de la carpeta data.js
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
function generarPociones(arrayPociones){
  arrayPociones.forEach(el => {
    tempPo.querySelector('#p-pociones').textContent = el.name;
    tempPo.querySelector('#p-descripcion').textContent = el.description;
    const clon = tempPo.cloneNode(true);
    fragme.appendChild(clon);
  });
  contenedor.appendChild(fragme);
}
generarPociones(data.potions);

//MENU DE NAVEGACION
const log=document.querySelector('.logo');
const inicio=document.querySelector('.inicio');
const contenedor_li=document.querySelector('.ul')
const characters=document.getElementById('characters');
const lib=document.getElementById('c_libro');
let poci=document.getElementById('c_pocion');
const filtrarUnidad=document.querySelector('.container-order');
const buscador=document.querySelector('.buscar')
const colegio=document.getElementById('c_colegio');
/*window.addEventListener("load",init)*/
function init(){
  characters.style.display='none';
  lib.style.display='none';
  poci.style.display='none';
  filtrarUnidad.style.display='none';
  buscador.style.display='none';
  colegio.style.display='none';
}
function ocultarInicio() {
  inicio.style.display = 'none';
}
contenedor_li.addEventListener('click', (e) => {
  if (e.target) {
    if (e.target.matches('a[href="#characters"]')) {
      ocultarInicio();
      characters.style.display='flex';
      lib.style.display='none';
      poci.style.display='none';
      filtrarUnidad.style.display='none';
      buscador.style.display='none';
      colegio.style.display='none';

    }
    else if (e.target.matches('a[href="#c_libro"]')) {
      ocultarInicio();/*inicio.classList.add('ocultar');*/
      characters.style.display='none';
      lib.style.display='flex';
      poci.style.display='none';
      filtrarUnidad.style.display='none';
      buscador.style.display='none';
      colegio.style.display='none';

    }
    else if (e.target.matches('a[href="#c_pocion"]')) {
      ocultarInicio();/*inicio.classList.add('ocultar');*/
      characters.style.display='none';
      lib.style.display='none';
      poci.style.display='flex';
      filtrarUnidad.style.display='block';
      buscador.style.display='flex';
      colegio.style.display='none';

    }
    else if (e.target.matches('a[href="#c_colegio"]')) {
      ocultarInicio();/*inicio.classList.add('ocultar');*/
      characters.style.display='none';
      lib.style.display='none';
      poci.style.display='none';
      filtrarUnidad.style.display='none';
      buscador.style.display='none';
      colegio.style.display='block';
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
const grupoAZ=document.querySelector('.AZ');
grupoAZ.addEventListener('click',(e)=>{
  const artiPociones=document.querySelectorAll(".arti-pociones");
  if(e.target.id==="za"){
   artiPociones.forEach(el=>{
    el.remove();

  })
    generarPociones(pociones_ordenadas(1,-1));
  }
  if(e.target.id==="az"){
    artiPociones.forEach(el=>{
      el.remove();
    })
    generarPociones(pociones_ordenadas(-1,1))
  }
})
//FILTRO DE BUSQUEDA
const inputBuscar=document.getElementById('busca');
inputBuscar.addEventListener('keyup',(e)=>{
  if(e.target.value){
    if(e.key ==='Escape')e.target.value="";
    const artiP=document.querySelectorAll(".arti-pociones");
    artiP.forEach(el=>{
      el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
      ?el.classList.remove('filtro')
      :el.classList.add('filtro')
    })
  }
})

//PERSONAJES
let personajes = data.characters.sort((a, b) => a.img ? -1 : b.img ? 1 : 0)
//
function agregarElementos() {
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
    if( personaje.img){ 
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

agregarElementos();

