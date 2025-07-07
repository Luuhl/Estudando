import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import TimePokemon from "./Página 1";
import Time from "./Página2";

function App () {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/timePokemon" />} />
      <Route path="/timePokemon" element={<TimePokemon/>}/>
      <Route path="/time" element={<Time/>}/>
    </Routes>
    </Router>
  )
}

export default App;