import data from './data/harrypotter/data.js';
// estas funciones son de ejemplo
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
export const pociones_ordenadas = ()=> {
  console.log(data.potions.sort((a,b)=>a.name>b.name?-1:1));
} 



/*export const sortPociones = (data,order)=> {
  let newPotions=[...data];
  let arrOrder=newPotions.sort((a,b)=>a.name<b.name?-order:order);
  return arrOrder
  data.potions.sort((a,b)=>{return (a.name > b.name)?-1:1 });
} 
export const sortData = (data, order) => {
  //Creando un nuevo array de data para ordenarlo sin modificar el original
  let newArrPokemon = [...data];

  //Ordenando los pokemon alfabéticamente
  let arrOrder = newArrPokemon.sort((a, b) => a.name < b.name ? -order : order); //-order a se va a posicionar antes (asc)
  return arrOrder;
};*/
