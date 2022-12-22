import React from 'react';
import s from './MusicPage.module.css'

function MusicPage(props) {
  return (
    <div className={s.music_page}>
    <div className={s.audio_player}>
      <p>{props.title}</p>
      <audio src={props.path} controls />
    </div>
  </div>
  );
}



export default MusicPage;
