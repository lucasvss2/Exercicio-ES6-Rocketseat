/* Exercicio aula 1 a 12 */
//4º questão
//4.1 - Desestruturação simples

const empresa = {
  nome: 'Rocketseat',
  endereco: {
  cidade: 'Rio do Sul',
  estado: 'SC',
  }
};

const{nome, endereco:{cidade, estado}}=empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//4.2 - Desestruturação em parâmetros

const usuario={
  nome: 'Diego',
  idade: 23,
};

function mostraInfo({nome, idade}) {
  return console.log(`${nome} tem ${idade} anos.`);
}

mostraInfo({ nome: 'Diego', idade: 23 })



