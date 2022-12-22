import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.my_posts}>
     <p className={s.title}>My posts</p> 
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hello!!!!!' like='20'/>
        <Post message='Who are you????' like='15'/>
      </div>
    </div>
  )
}

export default MyPosts;