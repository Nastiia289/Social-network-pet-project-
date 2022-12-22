import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href='#p'>Profile</a>
            </div>
            <div className={s.item}>
                <a href='#d'>Dialogs</a>
            </div>
            <div className={s.item}>
                <a href='#m'>Messages</a>
            </div>
            <div className={s.item}>
                <a href='#n'>News</a>
            </div>
            <div className={s.item}>
                <a href='#mus'>Music</a>
            </div>
            <div className={s.item}>
                <a href='s'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;