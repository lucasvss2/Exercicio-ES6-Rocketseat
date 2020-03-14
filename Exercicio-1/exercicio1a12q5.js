/* Exercicio aula 1 a 12 */
//5º questão

//5.1 - REST
const arr = [1, 2, 3, 4, 5, 6];
const[x,...y]=arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

//5.1.2

function soma(...params) {
  return params.reduce((total, next)=>total+next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//5.2
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};
console.log(usuario);

const usuario2 = {...usuario, nome: "Gabriel"};
console.log(usuario2);

const usuario3 = {...usuario, endereco:{cidade: "lontras"}};
console.log(usuario3);