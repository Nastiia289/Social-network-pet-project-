import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  // console.log(props)
  let postsElements = props.posts.map(m => <Post message={m.post} likesCount={m.likes} id={m.id} key={m.id}/>)
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }
  return (
    <div className={s.my_posts}>
      <p className={s.title}>My posts</p>
      <div className={s.textarea}>
        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} placeholder="Enter your post"></textarea>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;