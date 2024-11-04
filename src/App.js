import './App.css';
import { useState } from 'react';
import Addpip from './components/Addpip';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Addpip todos={todos} setTodos={setTodos} />

      {todos.map(item => (
        <TodoItem key={item.id} title={item.title} username={item.username} />
      ))}
    </div>
  );
}

export default App;