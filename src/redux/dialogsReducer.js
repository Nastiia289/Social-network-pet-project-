const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Nazarisko' },
    { id: 2, name: 'Dimytch' },
    { id: 3, name: 'Olga' },
    { id: 4, name: 'Rostik' },
    { id: 5, name: 'Nastiia' }
  ],
  messagesData: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'How are you?????' },
    { id: 3, message: 'Hellooooooo' },
    { id: 4, message: 'Are you here?' },
    { id: 5, message: 'HWU?' },
  ],
  newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessageBody = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messagesData: [...state.messagesData, { id: 6, message: newMessageBody }]
      }
    }
    case UPDATE_NEW_MESSAGE_BODY: {
      return {
        ...state,
        newMessageBody: action.newMessage
      };
    }
    default:
      return state;
  }
}

export const sendMessageAC = () => {
  return {
    type: SEND_MESSAGE
  }
}

export const updateNewMessageBodyAC = (message) => {
  return {
    type: { type: UPDATE_NEW_MESSAGE_BODY, newMessage: message }
  }
}



export default dialogsReducer;