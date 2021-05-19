import React from 'react';
import './App.css';
import { Header } from './features/Header/Header.js';
import { Home } from './features/Home/Home.js';
import { Subreddits } from './features/Subreddits/Subreddits';

function App() {
  return (
    <div className="App">
     <Header />
     <div className="page-container">
        <Home />
        <Subreddits />
     </div> 
    </div>
  );
}

export default App;
