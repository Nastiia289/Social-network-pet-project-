const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likes: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            console.log('added')
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            console.log(action.newText)
            return state;
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
