import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.persona}>
        <img src='https://cdn-icons-png.flaticon.com/512/4484/4484468.png' alt='person_post' />
        <p>{props.message}</p>
      </div>
      <div>
        <span>like </span>{props.likesCount}
      </div>

    </div>
  )
}

export default Post;