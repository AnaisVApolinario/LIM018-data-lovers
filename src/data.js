import data from './data/harrypotter/data.js';

export const pociones_ordenadas = (num1,num2)=> {
  const newPotions=[...data.potions];
  const arrOrder=newPotions.sort((a,b)=>a.name<b.name?num1:num2);
  return arrOrder;
} 






/*
export const pociones_ordenadas = (num1,num2)=> {
  return data.potions.sort((a,b)=>a.name<b.name?num1:num2);
} 

export const sortPociones = (data,order)=> {
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
