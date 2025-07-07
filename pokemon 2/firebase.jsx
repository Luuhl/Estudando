import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child,push } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBb0ujq6t4IVaSzgO6gWuFouaQdxSqbihU",
  authDomain: "cadastrarpokemon.firebaseapp.com",
  projectId: "cadastrarpokemon",
  storageBucket: "cadastrarpokemon.firebasestorage.com",
  messagingSenderId: "158921591980",
  appId: "1:158921591980:web:0f56f596e7d1c64545e309",
  measurementId: "G-YH6NZQG3H9"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, get, child,push };


//getDatabase conecta ao banco de dados.
//ref cria caminhos dentro do banco (como /pokemons/25).
//set salva dados.
//get lê dados.
//child acessa “filhos” de caminhos.
//push cria IDs automáticos (pra listas).
