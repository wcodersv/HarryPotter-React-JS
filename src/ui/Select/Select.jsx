import React from 'react';
import './Select.css'

export const Select = ({ house, handleHouseChange, selectedHouse }) => {
    return (
        <div className="input-house">
            <label htmlFor="house" className="input-text">House</label>
            <select
                required
                name="house"
                id="house"
                className="field-input"
                value={selectedHouse}
                onChange={handleHouseChange}
            >
                <option value="">-- Choose one --</option>
                {house.map((houseName) => (
                    <option key={houseName} value={houseName}>
                        {houseName}
                    </option>
                ))}
            </select>
        </div>
    );
};
