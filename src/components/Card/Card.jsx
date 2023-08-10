import React from 'react'

// React.memo используется для оптимизации производительности:
// компонент будет перерисован только при изменении пропсов
export const Card = React.memo(({ image, name, actor, gender, house, wand, alive, children }) => {
    return (
        <>
            <div className="card">
                <div className="card-photo">
                    <img src={image} alt={name} width="334px" height="192px" />
                    {children}
                </div>
                <div className="card-info">
                    <h2 className="card-info__title">{name}</h2>
                    <p>Actor: {actor}</p>
                    <p>Gender: {gender}</p>
                    <p>House: {house}</p>
                    <p>Wand core: {wand.core}</p>
                    <p>Alive: {alive ? "yes" : "no"}</p>
                </div>
            </div>
        </>
    )
})
