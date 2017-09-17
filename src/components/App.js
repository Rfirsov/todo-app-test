import React, { Component } from 'react';
import AddTodo from './AddTodo/AddTodo.js';
import ViewTodo from './ViewTodo/ViewTodo.js';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<AddTodo />
      	<ViewTodo />
      </div>
    );
  }
}

export default App;
