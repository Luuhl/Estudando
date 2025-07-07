import { useEffect, useState } from "react";
import { database, ref, get, child } from "./firebase";

function Time() {
  const [time, setTime] = useState([]);
  const [pokemonsDetalhes, setPokemonsDetalhes] = useState([]);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, "usuarios/usuario1/time")).then((snapshot) => {
      if (snapshot.exists()) {
        const timeNomes = snapshot.val();
        setTime(timeNomes);

        // Buscar detalhes de cada pokémon do time
        Promise.all(
          timeNomes.map((name) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => res.json())
          )
        ).then(setPokemonsDetalhes);
      }
    });
  }, []);

  return (
    <div>
      <h1>Esse é o seu time</h1>
      <div className="grid">
        {pokemonsDetalhes.map((poke) => (
          <div key={poke.name} className="card favorito">
            <img src={poke.sprites.front_default} alt={poke.name} width="120px" />
            <h3>{poke.name}</h3>
            <p>Tipo: {poke.types.map(t => t.type.name).join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Time;
