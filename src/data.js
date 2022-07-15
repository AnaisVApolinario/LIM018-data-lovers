
export const pociones_ordenadas = (dataPocion,num1,num2)=> {
  const newPotions=[...dataPocion];
  const arrOrder=newPotions.sort((a,b)=>a.name<b.name?num1:num2);
  return arrOrder;
} 
 


export const filtroHechi=(dataSpell,nHechizo)=>{
  const newHechizos=[...dataSpell]
  const hechizoFiltrado=newHechizos.filter((el)=>{
  return el.spell_type=== nHechizo;
});
return hechizoFiltrado;
}
export const computeStats=(dataPersonajes,FoM)=>{
  const newData=[...dataPersonajes];
  // contar cuantas veces nos encontramos un elemento que cumpla la caracteristica 
  let contador=0;
  // recorremos todos los elementos buscando los que tengan la caracteristica 
  newData.forEach((element)=>{
    if(element.gender===FoM)
    {
      contador += 1;
    }
  });
  return contador; 
}