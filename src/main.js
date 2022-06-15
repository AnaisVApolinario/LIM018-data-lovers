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



