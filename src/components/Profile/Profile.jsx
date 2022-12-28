import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={s.profile}>
        <ProfileInfo name='Nastiia Tverdokhlib' years='19' location='Ukraine' hobbie='drawing'/>
        <MyPosts />
    </div>
  )
}

export default Profile;