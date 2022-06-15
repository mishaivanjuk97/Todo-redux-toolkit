import './App.css';
import { Container} from '@mui/material';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <AddTodo />
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
