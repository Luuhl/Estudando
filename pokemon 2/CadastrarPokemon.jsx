import { useState } from "react";
import { database, ref, set } from "./firebase";

function CadastrarPokemons() {
  const [pokemon, setPokemon] = useState({
    id: "",
    nome: "",
    imagem: "",
    tipo: "",
    habilidade: "",
    altura: "",
    peso: "",
    descricao: "",
    categoria: "",
    regiao: "",
    fraqueza: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPokemon({ ...pokemon, [name]: value });
  }

  function salvar() {
    set(ref(database, "pokemons/" + pokemon.id), pokemon);
    alert("Pokémon cadastrado com sucesso!");
  }

  return (
    <div>
      <h1>Cadastrar Pokémon</h1>
      {Object.keys(pokemon).map((key) => (
        <div key={key}>
          <label>{key}:</label>
          <input name={key} value={pokemon[key]} onChange={handleChange} />
        </div>
      ))}
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}

export default CadastrarPokemons;
