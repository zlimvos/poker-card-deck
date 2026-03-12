import React from 'react';

// Card interface
interface Card {
    suit: string;
    value: string;
}

// Deck component
const Deck: React.FC = () => {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const createDeck = (): Card[] => {
        const deck: Card[] = [];
        suits.forEach(suit => {
            values.forEach(value => {
                deck.push({ suit, value });
            });
        });
        return deck;
    };

    const deck = createDeck();

    return (
        <div>
            <h1>Deck of Cards</h1>
            <ul>
                {deck.map((card, index) => (
                    <li key={index}>{card.value} of {card.suit}</li>
                ))}
            </ul>
        </div>
    );
};

export default Deck;
