import {useState} from "react";

function ListaTarefas() {
  const [tarefa, setTarefa] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

function adicionarTarefa() {
  if(novaTarefa.trim() === "") return;
  setTarefa([...tarefa, novaTarefa]);
  setNovaTarefa("");
}

return (
<div>
  <h1> suas tarefas são: </h1>

  <input
  type= "text"
  placeholder="Escreva aqui"
  value={novaTarefa}
  onChange={(e)  => setNovaTarefa(e.target.value)} />

  <button onClick={adicionarTarefa}> Adicionar </button>

  <ul> 
    {tarefa.map((nome, index)=> ( 

      <li key={index}>{nome}</li>

    ))}
  
  </ul>

</div>

)
}

export default ListaTarefas;