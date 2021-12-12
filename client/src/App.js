import './App.css';
import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail';
import { Router } from "@reach/router"

function App() {

  return (
    <div className="App">
      <h1>Welcome to the Product Manager Website!</h1>
      <Router >
        <Main path="/api/" />
        <Detail path="/api/products/:id" />
      </Router >
    </div>
  );
}

export default App;
