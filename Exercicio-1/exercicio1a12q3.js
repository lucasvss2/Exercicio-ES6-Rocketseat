/* Exercicio aula 1 a 12 */
//3º Questão
// 3.1
const arr = [1, 2, 3, 4, 5];
const novoArr= arr.map((item)=>item+10); 
console.log(novoArr);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario=> console.log(usuario.idade);
mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18)=>({nome,idade});
mostraUsuario(nome, idade);
mostraUsuario(nome);

// 3.4
const promise = ()=> new Promise((resolve, reject)=>resolve());