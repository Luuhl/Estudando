import { useState, useEffect } from "react";
import { database, ref, set, child} from "./firebase";
import { useNavigate } from "react-router-dom";

function TimePokemon() {
  const [favoritos, setFavoritos] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemon(data.results));
  }, []);

  function togglePokemon(pokemonName) {
    let novosFavoritos;
    if (favoritos.includes(pokemonName)) {
      novosFavoritos = favoritos.filter((name) => name !== pokemonName);
    } else {
      if (favoritos.length < 6) {
        novosFavoritos = [...favoritos, pokemonName];
      } else {
        return;
      }
    }
    setFavoritos(novosFavoritos);

    // Salva no Firebase
    set(ref(database, "usuarios/usuario1/time"), novosFavoritos);
  }

  function mensagemFavorito() {
    if (favoritos.length === 0) return "Você ainda não escolheu seu time";
    if (favoritos.length < 6) return `Faltam ${6 - favoritos.length} Pokémon(s)`;
    return "Seu time está completo!";
  }

  return (
    <div>
      <h1>Escolha seu time Pokémon</h1>
      <h3>{mensagemFavorito()}</h3>
      <button className="button" onClick={() => navigate("/time")}>
        Ver Meu Time
      </button>
      <div className="grid">
        {pokemon.map((pokemon) => {
          const id = pokemon.url.split("/")[6];
          const imagemUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <div
              key={pokemon.name}
              className={`card ${
                favoritos.includes(pokemon.name) ? "favorito" : ""
              }`}
            >
              <img src={imagemUrl} alt={pokemon.name} width="120px" />
              <h3>{pokemon.name}</h3>
              <button className="button" onClick={() => togglePokemon(pokemon.name)}>
                {favoritos.includes(pokemon.name)
                  ? "Remover Pokémon"
                  : "Escolher Pokémon"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TimePokemon;
