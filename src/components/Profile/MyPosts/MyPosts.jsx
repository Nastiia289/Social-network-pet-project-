import React from 'react';
import { addPostAC } from '../../../redux/profileReducer';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map(m => <Post message={m.post} likesCount={m.likes} id={m.id} />)
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostAC())
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type:'UPDATE-NEW-POST-TEXT', newText:text}
     props.dispatch(action)
    // props.dispatch(updateNewPostTextAC(text));
    // console.log('front see you')
  }
  return (
    <div className={s.my_posts}>
      <p className={s.title}>My posts</p>
      <div className={s.textarea}>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;