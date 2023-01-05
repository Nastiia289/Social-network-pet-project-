import React from "react"
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return(
      <div className={s.item}>
        <NavLink to={path}>
        <img src={props.src} alt='user'/>
        <div>{props.name}</div>
        </NavLink> 
      </div>
    )
  }

export default DialogItem