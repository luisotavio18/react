import './App.css';
import TodoList from './Components/TodoList'

function App() {
  const tasks = ['Estudar React', 'Fazer exercícios', 'Ler um livro'];

  return (
    <div className="App">
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
