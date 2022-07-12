import data from './data/harrypotter/data.js';

export const pociones_ordenadas = (num1,num2)=> {
  const newPotions=[...data.potions];
  const arrOrder=newPotions.sort((a,b)=>a.name<b.name?num1:num2);
  return arrOrder;
} 
 export const filtrarPersonajes =()=>{
  
 }

export const filtroHechi=(nHechizo)=>{
  const newHechizos=[...data.spells]
  const hechizoFiltrado=newHechizos.filter((el)=>{
  return el.spell_type=== nHechizo;
});
return hechizoFiltrado;
}

/*export const filtroHechi=data.spells.filter((el)=>{
  console.log(el.spell_type==='Charm');
})*/
/*export const filtroHechi=data.spells.filter((el)=>{
  return el==='Charm';
})*/


