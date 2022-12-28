import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
      <div>
        <div>
          <img src='https://i.pinimg.com/originals/9b/54/1c/9b541c1dc1328d12ca279e156ccfbcd3.jpg' alt='nature' className={s.my_background} />
        </div>
        <div className={s.all_content_profile}>
          <div>
            <div className={s.personal_information}>
              <img src='https://preview.redd.it/eaili2c6u0u81.jpg?auto=webp&s=96cc8979e0c352d2031b29ed81bd6dd384b3adf2' alt='avatar' className={s.avatar} />
              <div className={s.my_information}>
                <div className={s.my_name}>{props.name}</div>
                <div>Years: {props.years}</div>
                <div>Location: {props.location}</div>
                <div>Hobbie: {props.hobbie}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default ProfileInfo;