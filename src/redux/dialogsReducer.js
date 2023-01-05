const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageBody
            };
            state.messagesData.push(newMessage);
            state.newPostText = '';
            console.log('added')
            return state;
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.newMessage;
            console.log(action.newMessage)
            return state;
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