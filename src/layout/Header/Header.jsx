import React from 'react';
import './Header.css'

export const Header = ({ children }) => {
    return (
        <header className="header main">
            {/* <!--HEADER-INFO--> */}
            <div className="header-info">
                <h1 className="header-info__title">Harry Potter</h1>
                <p className="header-info__description">
                    View all characters from the Harry Potter universe
                </p>
            </div>
            {/* <!--HEADER - SEARCH--> */}
            <div className="header-search">
                {children}
            </div>
        </header>
    )
}
