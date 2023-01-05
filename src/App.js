import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import NewsPage from './components/NewsPage/NewsPage';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile state={props.state.profilePage} dispatch={props.dispatch}  />} />
            <Route path='/dialogs/*' element={<Dialogs  state={props.state.dialogsPage} dispatch={props.dispatch}/>} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
}



export default App;
