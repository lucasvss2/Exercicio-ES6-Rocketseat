//Modulo 3 - Aula 16 e 17
//1.1
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {

  await delay(console.log('1s'));
  await delay(console.log('2s'));
  await delay(console.log('3s'));
  
}
umPorSegundo();

//1.2
import axios from 'axios';
async function getUserFromGithub(user) {
    try{
    const response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response);
    }catch(err){
      console.warn('Usuario Invalido');
    }
}
getUserFromGithub('lucasvss2');


//1.3

class Github {
  static async getRepositories(repo) {
    try{
      const response = await axios.get(`https://api.github.com/repos/${repo}`)
      console.log(response.data);
      
    }
    catch(err){
      console.log(err);
      
      console.warn('Repositório não existe');
      
    }
  }
}

Github.getRepositories('lucasvss2/Exercicio-ES6-Rocketseat');

//1.4

const  buscaUsuario = async user =>  {

    try{
      const response = await axios.get(`https://api.github.com/users/${user}`)
      console.log(response);
    }
    catch{
      console.warn('Usuário não existe');    
    }
}
buscaUsuario('diego3g');