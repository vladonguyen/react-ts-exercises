import Todos from './components/Todos';
import './App.css';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TS')
  ];

  const addTodoHandler = (todoText: string)=> {

  };
  return (
    <div>
      <NewTodo onAddtodo={addTodoHandler}/>
    <Todos items={todos} />
    </div>
  );
}

export default App;
