import React from 'react';
import './ButtonLikeList.css';

export const ButtonLikeList = () => {
    return (
        <span className="button-like-list">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.9997 1.97108C18.6567 -4.87192 35.3007 7.10258 11.9997 22.5001C-11.3013 7.10408 5.34267 -4.87192 11.9997 1.97108Z" fill="#DC3545" />
            </svg>
            <span className='button-like-list__title'>Show Liked</span>
        </span>
    )
}
