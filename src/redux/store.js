import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

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


export default store;