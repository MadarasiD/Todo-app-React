import React, {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div class="grid-container">
      <div class="grid-item">This my Todo and Calendar app</div>
          <div class="grid-item">
            
          </div>
      <div class="grid-item">3</div>
      <div class="grid-item">
            <div className='todo-app'>
                    <TodoList />
            </div>
      </div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
      <div class="grid-item">7</div>
      <div class="grid-item">8</div>
      <div class="grid-item">9</div>
    </div>
  );
}

export default App;
