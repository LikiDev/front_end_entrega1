// App.js
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import PostList from './components/PostList/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <PostList />
    </div>
  );
}

export default App;

