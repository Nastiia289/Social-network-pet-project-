import React from 'react';
import { sendMessageAC } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (message) => {
      let action = { type: 'UPDATE-NEW-MESSAGE-BODY', newMessage: message }
      dispatch(action)
    },
    sendMessage: () => {
      dispatch(sendMessageAC())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;