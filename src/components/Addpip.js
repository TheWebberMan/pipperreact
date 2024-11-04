import { useState } from 'react';

function Addpip({ todos, setTodos }) {
  const [todo, setTodo] = useState(''); // Text for the todo title
  const [user, setUser] = useState(''); // Text for the username
  const [error, setError] = useState(null);

  const handleOnTodoChange = (event) => {
    setTodo(event.target.value);
  };

  const handleOnUserChange = (event) => {
    setUser(event.target.value);
  };

  function handleAddTodo() {
    if (todo === '' || user === '') {
      setError('Cannot add empty Pip');
    } else {
      const newTodo = {
        id: todos.length + 1,
        title: todo,
        username: user,
      };
      setTodos([...todos, newTodo]);
      setTodo('');
      setUser('');
      setError(null);
    }
  }

  return (
    <div>
      <div>Skriv et nyt pip!</div>
      <form>
        <input 
          type="text" 
          placeholder="Username" 
          value={user} 
          onChange={handleOnUserChange} 
        />
        <input 
          type="text" 
          placeholder="Skriv dit pip her" 
          value={todo} 
          onChange={handleOnTodoChange} 
        />
        
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="button" onClick={handleAddTodo}>Flæk det pip!</button>
      </form>
    </div>
  );
}

export default Addpip;