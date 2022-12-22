import React from 'react';
import AudioOcean from './Sounds/Ocean.mp3'
import AudioRain from './Sounds/rain.mp3'
import WhiteNoise from './Sounds/whiteNoise.mp3'
import s from './Music.module.css'
import MusicPage from './MusicPage/MusicPage';

function Music() {
  return (
    <div className={s.all_music_page}>
      <p className={s.title}> Music</p>
      <MusicPage title='Ocean Sound' path={AudioOcean}/>
      <MusicPage title='Rain Sound' path={AudioRain}/>
      <MusicPage title='White Noise' path={WhiteNoise}/>
    </div>

  );
}



export default Music;
