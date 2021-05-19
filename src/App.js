import React from 'react';
import './App.css';
import { Header } from './components/Header.js';
import { PostsList } from './components/PostsList.js';
import { Subreddits } from './components/Subreddits';

function App() {
  return (
    <div className="App">
     <Header />
     <div className="page-container">
        <PostsList />
        <Subreddits />
     </div> 
    </div>
  );
}

export default App;
