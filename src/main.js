import { pociones_ordenadas, filtroHechi, computeStats, filtrarPersonajes } from './data.js';//./es busca a partir de la carpeta data.js
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js'; //data es una variable de tipo objeto 

//MENU DE NAVEGACION
const log = document.querySelector('.logo-header');
const inicio = document.querySelector('.inicio');
const contenedorNav = document.querySelector('.nav-menu')
const characters = document.getElementById('characters');
const lib = document.getElementById('c_libro');
let poci = document.getElementById('c_pocion');
const filtrarUnidad = document.querySelector('.container-order');
const buscador = document.querySelector('.buscar')
const colegio = document.getElementById('c_colegio');
const hechiz = document.getElementById('c_hechizos');
const estadisticas = document.getElementById('c_estadistica');

/*window.addEventListener("load",init)*/
function init() {
  characters.style.display = 'none';
  lib.style.display = 'none';
  poci.style.display = 'none';
  filtrarUnidad.style.display = 'none';
  buscador.style.display = 'none';
  colegio.style.display = 'none';
  hechiz.style.display = 'none';
  estadisticas.style.display = 'none';
}
function ocultarInicio() {
  inicio.style.display = 'none';
}
function ocultarTodo(op1, op2, op3, op4, op5, op6, flexi, noni) {
  op1.style.display = flexi;
  op2.style.display = noni;
  op3.style.display = noni;
  op4.style.display = noni;
  op5.style.display = noni;
  op6.style.display = noni;
}
function pocionOpciones(flexi, blocki) {
  buscador.style.display = flexi;
  filtrarUnidad.style.display = blocki;
}
contenedorNav.addEventListener('click', (e) => {
  if (e.target) {
    if (e.target.matches('a[href="#characters"]')) {
      ocultarInicio();
      ocultarTodo(characters, lib, poci, colegio, hechiz, estadisticas, 'flex', 'none');
      pocionOpciones('none', 'none');
    }
    else if (e.target.matches('a[href="#c_libro"]')) {
      ocultarInicio();/*inicio.classList.add('ocultar');*/
      ocultarTodo(lib, characters, poci, colegio, hechiz, estadisticas, 'flex', 'none')
      pocionOpciones('none', 'none');
    }
    else if (e.target.matches('a[href="#c_pocion"]')) {
      ocultarInicio();
      ocultarTodo(poci, characters, lib, colegio, hechiz, estadisticas, 'flex', 'none')
      pocionOpciones('flex', 'block');
    }
    else if (e.target.matches('a[href="#c_colegio"]')) {
      ocultarInicio();
      ocultarTodo(colegio, characters, lib, poci, hechiz, estadisticas, 'flex', 'none')
      pocionOpciones('none', 'none');
    }
    else if (e.target.matches('a[href="#c_hechizos"]')) {
      ocultarInicio();
      ocultarTodo(hechiz, characters, lib, poci, colegio, estadisticas, 'flex', 'none')
      pocionOpciones('none', 'none');
    }
    else if (e.target.matches('a[href="#c_estadistica"]')) {
      ocultarInicio();
      ocultarTodo(estadisticas, characters, lib, poci, colegio, hechiz, 'flex', 'none')
      pocionOpciones('none', 'none');
    }
  }
});
log.addEventListener('click', (ev) => {
  if (ev.target) {
    inicio.style.display = 'flex';
    init();
  }
});

//PERSONAJES

function agregarElementos(personajes) {
  let contenedorPersonajes = document.createElement('div');
  contenedorPersonajes.className += "contenedorPersonajes";
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

    if (personaje.img) {
      characters.appendChild(contenedorPersonajes);
      contenedorPersonajes.appendChild(card)
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

let selectSecundario = document.getElementById("selectSecundario")
let selectGeneral = document.getElementById("selectGeneral")

function constOption(propiedad) {
  let filtros = data.characters
  let arrayDinamicos = []

  for (let i = 0; i < filtros.length; i++) {
    arrayDinamicos.push(filtros[i][propiedad])
  }
  let arrayUnico = arrayDinamicos.filter((valor, indice) => {
    return arrayDinamicos.indexOf(valor) === indice
  })
  for (let i = 0; i < arrayUnico.length; i++) {
    let option = document.createElement("option")
    option.value = arrayUnico[i]
    option.text = arrayUnico[i]
    selectSecundario.appendChild(option)
  }
}

selectGeneral.addEventListener('change', e => {
  for (let i = selectSecundario.options.length; i >= 0; i--) {
    selectSecundario.remove(i)
  }
  constOption(e.target.value)
})
selectSecundario.addEventListener('change', e => {
  const selectP = document.getElementById('selectGeneral');
  const grupoCard = document.querySelectorAll(".card");
  grupoCard.forEach(el => {
    el.remove()
  })
  agregarElementos(filtrarPersonajes(data.characters, selectP.value, e.target.value))

});

//HECHIZOS
const c_hechizo = document.getElementById('c_hechizos');
const tempHechizos = document.getElementById('template-hechizos').content;//accede a los elementos osea a su contenido
const frag = document.createDocumentFragment();//guarda codigo en una memoria volatil y no lo pinta en el HTML hasta que se lo digamos

const miSelect = document.createElement('select');
c_hechizo.appendChild(miSelect);

function generarHechizos(arrayHechizos) {
  arrayHechizos.forEach(item => {
    tempHechizos.getElementById('nombreH').textContent = item.name;
    if (item.other_name === null) {
      tempHechizos.getElementById('other_name').innerHTML = `<b>Otro Nombre:</b>${" No tiene"} `;
    } else { tempHechizos.getElementById('other_name').innerHTML = `<b>Otro Nombre:</b> ${item.other_name} `; }
    tempHechizos.getElementById('spell_type').innerHTML = `<b>Tipo:</b> ${item.spell_type} `;
    tempHechizos.getElementById('description').innerHTML = `<b>DESCRIPCION:</b> ${item.description}`;

    const clone = tempHechizos.cloneNode(true);
    frag.appendChild(clone);
  });
  c_hechizo.appendChild(frag);
}
generarHechizos(data.spells);

//Filtro de Hechizos por tipo 
miSelect.classList.add("miSelect")
function funSelect() {
  const arrHechizos = data.spells;
  let type = arrHechizos.map(i => {
    return i.spell_type;
  });
  //No permite que se repita los valores 
  const arraySpell = type.join(',').replace(/ /g, "").split(',');//join(',').replace(/\s+/g, '').split(',')//replace(/ /g, "")
  const unicos = [];
  arraySpell.forEach((i) => {
    if (!unicos.includes(i)) {
      unicos.push(i);
    }
  });
  //crea mis opciones con valores no repetidos
  unicos.forEach(e => {
    let op = document.createElement('option');
    op.value = e;
    op.textContent = e;
    miSelect.appendChild(op);
  });
  //Filtro mis hechizos
  miSelect.addEventListener('change', (e) => {
    const artiHech = document.querySelectorAll(".arti-hechizos");
    remover(artiHech);
    generarHechizos(filtroHechi(data.spells, e.target.value))
  })
}
funSelect()//llamo a la funcion 

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
function generarPociones(arrayPociones) {
  arrayPociones.forEach(el => {
    tempPo.querySelector('#p-pociones').textContent = el.name;
    tempPo.querySelector('#p-descripcion').textContent = el.description;
    const clon = tempPo.cloneNode(true);
    fragme.appendChild(clon);
  });
  contenedor.appendChild(fragme);
}
generarPociones(data.potions);

//FILTRO DE BUSQUEDA
const inputBuscar = document.getElementById('busca');
inputBuscar.addEventListener('keyup', (e) => {
  if (e.target.value) {
    if (e.key === 'Escape') e.target.value = "";
    const artiP = document.querySelectorAll(".arti-pociones");
    artiP.forEach(el => {
      el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? el.classList.remove('filtro')
        : el.classList.add('filtro')
    })
  }
})

//Botones de la AZ
const grupoAZ = document.querySelector('.AZ');
function remover(arti) {
  arti.forEach(el => {
    el.remove();
  })
}
grupoAZ.addEventListener('click', (e) => {
  const artiPociones = document.querySelectorAll(".arti-pociones");
  if (e.target.id === "za") {
    remover(artiPociones)
    generarPociones(pociones_ordenadas(data.potions, 1, -1));
  }
  if (e.target.id === "az") {
    remover(artiPociones)
    generarPociones(pociones_ordenadas(data.potions, -1, 1))
  }
})

//GRAFICOS ESTADISTICOS
const ctx = document.getElementById('myChart');
const genero = ['Femenino', 'Maculino'];
const cantidadFemeninoMasculino = [computeStats(data.characters, 'Female'), computeStats(data.characters, 'Male')];
//Objeto de la clase chart//Recibe dos parametros el contenedor donde se mostrara el grafico
//y en segundo punto recibe la configuracion de los graficos
// eslint-disable-next-line no-undef
new Chart(ctx, {
  type: 'pie',/*tipo de garfica*/
  data: {
    labels: genero,//nombres de la data
    datasets: [{ //aqui ira los datos de las edades
      label: 'Cantidad',
      data: cantidadFemeninoMasculino,
      backgroundColor: [
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(153, 102, 255, 2)',
        'rgba(255, 159, 64, 2)'
      ],
      borderWidth: 1.5//Para darle un ancho a los bordes
    }]
  }
})

