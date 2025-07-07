import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database, ref, get, child } from "./firebase";

function DetalhesPokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `pokemons/${id}`)).then(snapshot => {
      if (snapshot.exists()) {
        setPokemon(snapshot.val());
      } else {
        setPokemon(null);
      }
    });
  }, [id]);

  if (!pokemon) return <p>Carregando ou Pokémon não encontrado...</p>;

  return (
    <div>
      <h1>Detalhes do Pokémon #{pokemon.id}</h1>
      <img src={pokemon.imagem} alt={pokemon.nome} width="150" />
      <ul>
        {Object.entries(pokemon).map(([chave, valor]) => (
          <li key={chave}>
            <strong>{chave}:</strong> {valor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetalhesPokemon;
