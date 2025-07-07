import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListarPokemon from "./ListarPokemon";
import CadastrarPokemon from "./CadastrarPokemon";
import DetalhesPokemon from "./DetalhesPokemon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListarPokemon />} />
        <Route path="/cadastrar" element={<CadastrarPokemon />} />
        <Route path="/detalhes/:id" element={<DetalhesPokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
