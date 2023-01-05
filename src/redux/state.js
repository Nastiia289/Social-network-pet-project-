import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: 'Hi!', likes: 23 },
        { id: 2, post: 'How are you?????', likes: 20 },
        { id: 3, post: 'Hellooooooo', likes: 15 },
        { id: 4, post: 'Are you here?', likes: 23 },
        { id: 5, post: 'Who are you????', likes: 39 },
      ],
      newPostText: 'Hello'
    },
    dialogsPage: {
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
      newMessageBody: 'Hi'
    }
  },
  _callSubscriber() {
    console.log('State was changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
}

export const addPostAC = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextAC = (text) => {
  return {
    type: { type: UPDATE_NEW_POST_TEXT, newText: text }
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

export default store;