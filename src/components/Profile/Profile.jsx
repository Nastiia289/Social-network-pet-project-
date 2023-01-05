import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.profile}>
        <ProfileInfo name='Nastiia Tverdokhlib' years='19' location='Ukraine' hobbie='drawing'/>
        <MyPosts 
         posts={props.state.posts}
         newPostText={props.newPostText} 
         dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;