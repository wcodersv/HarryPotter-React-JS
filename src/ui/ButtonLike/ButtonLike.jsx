import React from 'react';
import './ButtonLike.css'
import { ReactComponent as Like } from './assets/Like.svg';
import { ReactComponent as Dislike } from './assets/Dislike.svg';

export const ButtonLike = ({ toggleLike, isLiked }) => {
    return (
        <button className='btn' onClick={toggleLike}>
            {isLiked ? <Like /> : <Dislike />}
        </button>
    )
}
