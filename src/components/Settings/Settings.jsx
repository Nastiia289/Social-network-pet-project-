import React from 'react';
import s from './Settings.module.css'

function Settings() {
  return (
    <div className={s.settings}>
      <div className={s.settings_tittle}>Settings</div>
      <img src='https://cdn-icons-png.flaticon.com/512/484/484562.png' alt='settings'/>
      <p className={s.development} >The page in development...</p>
    </div>
  );
}



export default Settings;
