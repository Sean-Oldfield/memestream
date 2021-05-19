import React from 'react';
import './App.css';
import { Header } from './components/Header.js';
import { Post } from './components/Post.js';

function App() {
  return (
    <div className="App">
     <Header /> 
     <Post />
    </div>
  );
}

export default App;
