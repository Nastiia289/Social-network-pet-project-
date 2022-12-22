import React from 'react';
import s from './News.module.css'

const News = (props) => {
    return (
        <div className={s.news_block}>
            <img src={props.image} alt='food' />
            <div className={s.description}>
                <p>
                    <a href={props.link} rel='noreferrer' target='_blank'>
                        {props.title}
                    </a>
                </p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default News;