
import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <header><h1>TODOLIST</h1></header>
      <main>
        <div>
          <form onSubmit={(event) => {
            event.preventDefault();
            const newTodo = {
              id: uuid(),
              title: title,
              contents: contents,
              isDone: false,
            }
            setTodos([...todos, newTodo])
          }}>
            <span className='title'>Title</span> <input value={title} onChange={(event) => {
              return setTitle(event.target.value);
            }} />
            <span className='title'>Todo</span><input value={contents} onChange={(event) => {
              return setContents(event.target.value);
            }} />
            <button>입력</button>
          </form>
        </div>
        <div>
          <h2 className='title2'>Things To Do</h2>
          {
            todos.filter((todo) => {
              return todo.isDone === false;
            }).map((todo) => {
              return (
                <div className='todobox' key={todo.id}>
                  <p>{todo.id}</p>
                  <h3>Title</h3>
                  <p>{todo.title}</p>
                  <h3>Things To Do</h3>
                  <p> {todo.contents}</p>
                  <p>{todo.isDone.toString()}</p>
                  <button onClick={() => {
                    const newTodo = todos.map((item) => {
                      if (item.id === todo.id) {
                        return {
                          ...item, isDone: !item.isDone
                        }
                      } else {
                        return item;
                      }
                    })
                    setTodos(newTodo);
                  }}>완료</button>
                  <button onClick={() => {
                    const deleteTodo = todos.filter((item) => {
                      return item.id !== todo.id;
                    })
                    setTodos(deleteTodo);
                  }}>삭제</button>
                </div>
              )
            })
          }
        </div>
        <div>
          <h2 className='title2'>Is Done</h2>
          {
            todos.filter((todo) => {
              return todo.isDone === true;
            }).map((todo) => {
              return (
                <div className='todobox' key={todo.id}>
                  <p>{todo.id}</p>
                  <h3>Title</h3>
                  <p>{todo.title}</p>
                  <h3>Things To Do</h3>
                  <p> {todo.contents}</p>
                  <p>{todo.isDone.toString()}</p>
                  <button onClick={() => {
                    const newTodo = todos.map((item) => {
                      if (item.id === todo.id) {
                        return {
                          ...item, isDone: !item.isDone
                        }
                      } else {
                        return item;
                      }
                    })
                    setTodos(newTodo);
                  }}>취소</button>
                  <button onClick={() => {
                    const deleteTodo = todos.filter((item) => {
                      return item.id !== todo.id;
                    })
                    setTodos(deleteTodo);
                  }}>삭제</button>
                </div>
              )
            })
          }
        </div>
      </main>
      <footer>
        todolist _박서아
      </footer>
    </div>

  );
}

export default App;
