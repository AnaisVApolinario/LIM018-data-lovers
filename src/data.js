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
 export const filtrarPersonajes =()=>{
  
 }