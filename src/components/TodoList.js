import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }

  return (
    <div>
        <h1>Mi a terved mára?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo />
    </div>
  )
}

export default TodoList