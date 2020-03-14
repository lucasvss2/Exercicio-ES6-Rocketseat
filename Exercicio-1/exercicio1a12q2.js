/* Exercicio aula 1 a 12 */
//2º Questão

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
  ];
//2.1
const listaIdades = usuarios.map(({idade})=>idade);

console.log(listaIdades);

//2.2

const funcRocketseat = 
usuarios.filter(({idade, empresa})=>idade>=18 && empresa==='Rocketseat');

console.log(funcRocketseat);

//2.3

const google = usuarios.find( ({empresa})=> empresa==='Google');
console.log(google);

//2.4

const lista2xIdades = usuarios.map(usuarios=>({...usuarios, idade: usuarios.idade*2}));
const idadeMenorQue50 = lista2xIdades.filter(({idade})=>idade<=50);
console.log(idadeMenorQue50);


