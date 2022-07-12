import data from './data/harrypotter/data.js';

export const pociones_ordenadas = (num1,num2)=> {
  const newPotions=[...data.potions];
  const arrOrder=newPotions.sort((a,b)=>a.name<b.name?num1:num2);
  return arrOrder;
} 











export const filtroHechi=(nHechizo)=>{
  const newHechizos=[...data.spells]
  const hechizoFiltrado=newHechizos.filter((el)=>{
  return el.spell_type=== nHechizo;
});
return hechizoFiltrado;
}
export const computeStats=(MoF)=>{
  const newData=[...data.characters];
  // contar cuantas veces nos encontramos un elemento que cumpla la caracteristica 
  let contador=0;
  // recorremos todos los elementos buscando los que tengan la caracteristica 
  newData.forEach((element)=>{
    if(element.gender===MoF)
    {
      contador += 1;
    }
  });
  return contador; 
}