import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


//Ctrl+A => Ctrl+K+F

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile/>
    </div>
  );
}

export default App;
