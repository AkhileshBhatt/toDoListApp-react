import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>React to-do-list App</h3>
      </header>
      <ToDoList />
    </div>
  );
}

export default App;
