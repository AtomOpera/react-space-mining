import type { Card, AsteroidCard } from '../types';

interface DebuggerBoxProps {
  title: string;
  cards: (Card | AsteroidCard)[];
}

const DebuggerBox = ({ title, cards }: DebuggerBoxProps) => {
  return (
    <>
      <div>
        <h2 style={{ padding: "10px" }}>{title}</h2>
        <ol style={{ padding: "10px" }} className="list-group">
          {cards[0] !== undefined ? (
            cards.map((listitem) => (
              <li
                key={listitem.id}
                className="list-group-item list-group-item-primary"
              >
                {listitem.card}
              </li>
            ))
          ) : (
            <></>
          )}
        </ol>
      </div>
    </>
  );
};

export default DebuggerBox;
