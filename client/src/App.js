import './App.css';
import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail';
import { Router } from "@reach/router";
import Update from './views/Update';

function App() {

  return (
    <div className="App">
      <h1>Welcome to the Product Manager Website!</h1>
      <Router >
        <Main path="/api/products" />
        <Detail path="/api/products/:id" />
        <Update path="/api/products/:id/edit" />
      </Router >
    </div>
  );
}

export default App;
