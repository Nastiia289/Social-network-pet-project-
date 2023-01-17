import React from 'react';
import store from '../../redux/store';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  // console.log(store.getState().profilePage.posts)
  return (
    <div className={s.profile}>
        <ProfileInfo name='Nastiia Tverdokhlib' years='19' location='Ukraine' hobbie='drawing'/>
        <MyPostsContainer />
    </div>
  )
}

export default Profile;