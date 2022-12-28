import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: 'Nazarisko' },
    { id: 2, name: 'Dimytch' },
    { id: 3, name: 'Olga' },
    { id: 4, name: 'Rostik' },
    { id: 5, name: 'Nastiia' }
  ]
  let messagesData = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you?????' },
    { id: 3, message: 'Hellooooooo' },
    { id: 4, message: 'Are you here?' },
    { id: 5, message: 'HWU?' },
  ]
  let dialogsElements = dialogsData.
  map( d => <DialogItem name={d.name} id={d.id}/>)

  let message = messagesData.
  map( m => <Message message={m.message} id={m.id}/>)

  return (
    <div className={s.dialogs_page}>
      <div className={s.dialogs_title}>Dialogs</div>
      <div className={s.dialog_data}>
        {dialogsElements}
      </div>
      <div className={s.dialog_data}>
        {message}
      </div>
    </div>
  )
}

export default Dialogs;