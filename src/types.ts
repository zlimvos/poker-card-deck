export type Suit = "hearts" | "diamonds" | "spades" | "clubs";
export type Rank = "A" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K";
export interface CardProps {
  rank: Rank;
  suit: Suit;
  className?: string;
  style?: React.CSSProperties;
}
export interface CardDeck {
  cards: Array<{ rank: Rank; suit: Suit }>;
  shuffle: () => void;
  draw: () => { rank: Rank; suit: Suit } | undefined;
  reset: () => void;
}