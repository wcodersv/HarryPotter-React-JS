import React from 'react'

export const Main = ({ children }) => {
    return (
        <main>
            <div className="container main">
                {children}
            </div>
        </main>
    )
}
