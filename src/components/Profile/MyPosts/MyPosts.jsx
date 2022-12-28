import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    { id: 1, post: 'Hi!',likes: 23 },
    { id: 2, post: 'How are you?????', likes: 20 },
    { id: 3, post: 'Hellooooooo', likes: 15},
    { id: 4, post: 'Are you here?', likes: 23 },
    { id: 5, post: 'Who are you????', likes: 39 },
  ]
  let posts = postsData.map( m =>  <Post message={m.post} likesCount={m.likes} id={m.id}/>)
  return (
    <div className={s.my_posts}>
     <p className={s.title}>My posts</p> 
      <div className={s.textarea}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {posts}
      </div>
    </div>
  )
}

export default MyPosts;