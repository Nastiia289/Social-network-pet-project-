import React from 'react';
import s from './MusicPage.module.css'

function MusicPage(props) {
  // function stopAudio(e){
  //   let audio = document.querySelectorAll('audio')
  //   console.log(audio)
  //   audio.forEach(el => {
  //     el.pause()
      
  //   });
  //   e.target.querySelector('audio').play()
  // }
  return (
    <div className={s.music_page}>
    <div className={s.audio_player} 
    // onClick={(e) => stopAudio(e)}
    >
      <p>{props.title}</p>
      <audio src={props.path} controls />
    </div>
  </div>
  );
}



export default MusicPage;
