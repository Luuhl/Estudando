// Importa funções do React:
// useState → para armazenar dados (como os filmes favoritos)
// useEffect → para executar algo sempre que os dados mudarem
import { useState, useEffect } from 'react';
import './App.css'; // Importa o estilo da página

// Lista de filmes fixa (essa você pode copiar do PDF)
const filmes = [
  { id: '1', title: 'O Poderoso Chefão', description: 'Um clássico do cinema.' },
  { id: '2', title: 'Um Sonho de Liberdade', description: 'A história da esperança.' },
  { id: '3', title: 'A Origem', description: 'Um filme que mexe com a mente.' },
  { id: '4', title: 'Pulp Fiction', description: 'Um marco da década de 90.' },
  { id: '5', title: 'Interestelar', description: 'Viagem no tempo e espaço.' },
  { id: '6', title: 'Clube da Luta', description: 'Subversão e reflexão social.' },
  { id: '7', title: 'Matrix', description: 'Um mundo virtual surpreendente.' },
  { id: '8', title: 'Forrest Gump', description: 'A vida é como uma caixa de chocolates.' },
  { id: '9', title: 'O Senhor dos Anéis', description: 'O início de uma épica jornada.' },
  { id: '10', title: 'Star Wars', description: 'A primeira aventura na galáxia muito, muito distante.' }
];

function App() {
  // Cria um estado para guardar os filmes favoritados (inicia vazio)
  const [favoritos, setFavoritos] = useState([]);

  // Função que adiciona ou remove um filme da lista de favoritos
  function toggleFavorito(filmeId) {
    if (favoritos.includes(filmeId)) {
      // Se o filme já estiver nos favoritos, remove ele
      setFavoritos(favoritos.filter(id => id !== filmeId));
    } else {
      // Se o filme ainda não está, adiciona ele
      setFavoritos([...favoritos, filmeId]);
    }
  }

  // useEffect: toda vez que a lista de favoritos mudar, mostra no console
  useEffect(() => {
    console.log("Favoritos atualizados:", favoritos);
  }, [favoritos]); // Só roda quando "favoritos" mudar

  // Função que retorna a mensagem certa conforme a quantidade de favoritos
  function mensagemFavoritos() {
    if (favoritos.length === 0) {
      return "Você ainda não favoritou nenhum filme";
    } else if (favoritos.length <= 2) {
      return "Você tem alguns filmes favoritos!";
    } else {
      return "Uau! Uma coleção impressionante de favoritos!";
    }
  }

  // Tudo que for exibido na tela vai dentro do return:
  return (
    <div className="App">
      <h1>Filmes Favoritos</h1>

      {/* Mostra a mensagem personalizada conforme os favoritos */}
      <p>{mensagemFavoritos()}</p>

      <ul>
        {/* Percorre todos os filmes da lista */}
        {filmes.map((filme) => (
          <li key={filme.id}>
            <h3>{filme.title}</h3>
            <p>{filme.description}</p>

            {/* Botão para favoritar ou desfavoritar o filme */}
            <button onClick={() => toggleFavorito(filme.id)}>
              {favoritos.includes(filme.id) ? 'Remover dos Favoritos' : 'Favoritar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exporta esse componente para ser usado no React
export default App;
