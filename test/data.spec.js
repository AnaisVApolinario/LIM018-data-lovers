import { pociones_ordenadas,filtroHechi,computeStats, filtrarPersonajes} from '../src/data.js';

const nameEjm =[
  {
    "spell_type":"Charm",
    "name":"Mortentia",
    "gender":"Female",
    "house": "Gryffindor",
    "species": "Goblin"
  },
  {
    "spell_type":"Propag",
    "name":"Zefelis",
    "gender":"Female",
    "house": "Ravenclaw",
    "species": "Centaur"
  },
  {
    "spell_type":"Pury",
    "name":"Ageing",
    "gender":"Female",
    "house": "Slytherin",
    "species": "Human",
  },
  {
    "spell_type":"Charm",
    "name":"Lola",
    "gender":"Male",
    "house": "Gryffindor",
    "species": "Human"
  }
]

describe('pruebas para ordenar de AZ-ZA', () => {
  it('is a function', () => {
    expect(typeof pociones_ordenadas).toBe('function');
  });
  it('deberia ordenar de la az',()=>{
    expect(pociones_ordenadas(nameEjm,-1,1)).toEqual([nameEjm[2],nameEjm[3],nameEjm[0],nameEjm[1]]);
  });
  it('deberia ordenar de la za',()=>{
    expect(pociones_ordenadas(nameEjm,1,-1)).toEqual([nameEjm[1],nameEjm[0],nameEjm[3],nameEjm[2]]);
  });
});

describe('prueba filtrar Personajes por house y especies ',()=>{
  it('is a function',()=>{
    expect(typeof filtrarPersonajes).toBe('function');
  });
  it('deberia filtrar por house',()=>{
    expect(filtrarPersonajes(nameEjm,'house','Gryffindor')).toEqual([nameEjm[0],nameEjm[3]])
  })
  it('deberia filtrar por species',()=>{
    expect(filtrarPersonajes(nameEjm,'species','Human')).toEqual([nameEjm[2],nameEjm[3]])
  })
})

describe('pruebas filtrar Hechizos por tipo', () => {
  it('is a function', () => {
    expect(typeof filtroHechi).toBe('function');
  });
  it('deberia filtrar todos los Charm',()=>{
    expect(filtroHechi(nameEjm,"Charm")).toEqual([nameEjm[0],nameEjm[3]]);
  });
  it('deberia filtrar todos los Pury',()=>{
    expect(filtroHechi(nameEjm,"Pury")).toEqual([nameEjm[2]]);
  });
});

describe('pruebas para las Estadisticas', () => {
  //let filtTipo=[{name:"Mortentia"},{name:"Mortentia"}]
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });
  it('deberia retornar la cantidad de Male',()=>{
    expect(computeStats(nameEjm,"Male")).toBe(1);
  });
  it('deberia retornar la cantidad de Female',()=>{
    expect(computeStats(nameEjm,"Female")).toBe(3);
  });
  it('deberia deberia darme un valor que no sea 0',()=>{
    expect(computeStats(nameEjm,"Female")).not.toBe(0);
  });
});



/*1RA FORMA DE RESOLVER
const nameEjm =[{"name":"Mortentia"},{"name":"Zefelis"},{"name":"Ageing"},{"name":"Mortentia"}]
  describe('pruebas para ordenar de AZ-ZA', () => {
    let ordenAZ=[{name:"Ageing"},{name:"Mortentia"},{name:"Mortentia"},{name:"Zefelis"}]
     it('deberia ordenar de la az',()=>{
    expect(pociones_ordenadas(nameEjm,-1,1)).toEqual(ordenAZ);
  }); 
  } 
  */
