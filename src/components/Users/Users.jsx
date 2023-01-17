import axios from 'axios';
import React from 'react';
import emptyAvatar from '../../assets/images/User-Profile.png';
import s from './Users.module.css'

class Users extends React.Component {
    componentDidMount(props){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(res => {
            this.props.setUsers(res.data.items)
        })
    }
    render() {
        return (
            <div className={s.usersPage}>
                {/* <buttton onClick={this.getUsers}>Get Users</buttton> */}
                {
                    this.props.users.map(u => <div key={u.id} className={s.oneUsers}>
                        <div>
                            <div><img src={u.photos.small != null ? u.photos.small : emptyAvatar} className={s.userPhoto} /></div>
                            <div className={s.userButton}>
                                {u.followed ?
                                    <button className={s.unfollowed} onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                                    : <button className={s.followed} onClick={() => { this.props.follow(u.id) }}>follow</button>}
                            </div>
                        </div>
                        <div className={s.personalInfo}>
                            <div className={s.userPesonal}>
                                <div className={s.personalInfoName}>{u.name}</div>
                                <div className={s.personalInfoStatus}>{u.status}</div>
                            </div>
                            <div>
                                <div className={s.personalUserInfo}>{"u.location.country"}</div>
                                <div className={s.personalUserInfo}>{"u.location.city"}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;