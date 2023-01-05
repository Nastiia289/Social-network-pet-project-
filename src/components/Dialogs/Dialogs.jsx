import React from 'react';
import { sendMessageAC, updateNewMessageBodyAC } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogs = props.state.dialogsData.map(d => <DialogItem src={'https://www.pngkey.com/png/full/122-1227642_cyan-dodgeball-solid-color-circle-png.png'} name={d.name} id={d.id} />)
  let messages = props.state.messagesData.map(m => <Message message={m.message} id={m.id} />)
  let newMessageElement = React.createRef();

  let onSendMessage = () => {
    props.dispatch(sendMessageAC())
  }
  let onNewMessageChange = () => {
    let message = newMessageElement.current.value;
    let action = {type:'UPDATE-NEW-MESSAGE-BODY', newMessage:message}
     props.dispatch(action)
    // props.dispatch(updateNewPostTextAC(text));
    // console.log('front see you')
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