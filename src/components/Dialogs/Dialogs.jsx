import React from 'react';
import { sendMessageAC } from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
  const state = props.dialogsPage;
  let dialogs = state.dialogsData.map(d => <DialogItem src={'https://www.pngkey.com/png/full/122-1227642_cyan-dodgeball-solid-color-circle-png.png'} name={d.name} id={d.id} key={d.id} />)
  let messages = state.messagesData.map(m => <Message message={m.message} id={m.id} key={m.id}/>)
  let newMessageElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage()
  }
  let onNewMessageChange = () => {
    let message = newMessageElement.current.value;
    props.updateNewMessageBody(message)
  }
  return (
    <div className={s.dialogs_page}>
      <div className={s.dialogs_title}>Dialogs</div>
      <div className={s.dialog_data}>
        {dialogs}
      </div>
      <div className={s.dialog_data}>
        {messages}
        <div className={s.textarea}>
          <textarea ref={newMessageElement}  onChange={onNewMessageChange} value={props.newMessageBody} placeholder='Enter your message'></textarea>
          <button onClick={onSendMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;