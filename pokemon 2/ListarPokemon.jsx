import { useEffect, useState } from "react";
import { database, ref, get, child } from "./firebase";
import { Link } from "react-router-dom";

function ListarPokemons() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, "pokemons")).then(snapshot => {
      if (snapshot.exists()) {
        const dados = snapshot.val();
        const array = Object.values(dados);
        setLista(array);
      }
    });
  }, []);

  return (
    <div>
      <h1>Pokémons Cadastrados</h1>
      <Link to="/cadastrar">+ Cadastrar novo</Link>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {lista.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={p.imagem} alt={p.nome} width="100" />
            <h3>{p.nome}</h3>
            <p>Nº {p.id}</p>
            <Link to={`/detalhes/${p.id}`}>Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListarPokemons;
