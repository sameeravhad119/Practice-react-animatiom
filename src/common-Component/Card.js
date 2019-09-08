import React from 'react';
import './Card.scss';

const Card = ({ index, name, removeItem }) => {
    return (
        <div key={name} className={'Card'}>
            <span>{name}</span>
            <span className={'cross-btn'}
                onClick={() => removeItem(index)}>
                X
            </span>
        </div>
    )
}

export default Card;