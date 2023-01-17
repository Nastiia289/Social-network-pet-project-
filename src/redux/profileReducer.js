const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, post: 'Hi!', likes: 23 },
    { id: 2, post: 'How are you?????', likes: 20 },
    { id: 3, post: 'Hellooooooo', likes: 15 },
    { id: 4, post: 'Are you here?', likes: 23 },
    { id: 5, post: 'Who are you????', likes: 39 },
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        post: state.newPostText,
        likes: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    default:
      return state;
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


export default profileReducer;
