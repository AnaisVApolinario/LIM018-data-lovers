import data from './data/harrypotter/data.js';
// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const pociones_ordenadas=data.potions.sort((a,b)=>{
  console.log("a")
  return (a.name > b.name)?-1:1;  
})
