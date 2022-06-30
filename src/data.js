import data from './data/harrypotter/data.js';
// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

const pociones_ordenadas=data.potions.sort((a,b)=>{
  return a.name - b.name  
})
console.log(pociones_ordenadas);