import React from 'react';
import './Input.css'

export const Input = ({ handleInput }) => {
    return (
        <div className="input-name" onChange={evt => handleInput(evt)}>
            <label htmlFor="name" className="input-text">Name </label>
            <input type="text" name="name" id="name" placeholder="Hermione" className="field-input" />
        </div>
    )
}
