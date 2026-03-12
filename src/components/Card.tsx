import React from 'react';

interface CardProps {
    suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
    value: string;
}

const Card: React.FC<CardProps> = ({ suit, value }) => {
    return (
        <div className={`card ${suit}`}>
            <div className="suit top">{suit}</div>
            <div className="value">{value}</div>
            <div className="suit bottom">{suit}</div>
        </div>
    );
};

export default Card;
