import type { Card } from '../types';

interface CardBoxProps {
  content?: Card;
  pos: string;
  playCard: (params: { content?: Card; pos: string }) => Promise<void>;
  setDescription: (description: string) => void;
  changeDescription?: (content?: Card) => void;
  disabled: boolean;
}

const CardBox = ({
  content,
  pos,
  playCard,
  setDescription,
  disabled
}: CardBoxProps) => {
  const output = content?.card ?? "empty";

  return (
    <>
      <button
        style={{
          height: "100px",
          width: "300px",
          margin: "10px",
          padding: "10px"
        }}
        onClick={() => playCard({ content, pos })}
        onMouseEnter={() =>
          setDescription(content ? content.description : "nothing here")
        }
        onMouseLeave={() => setDescription("")}
        disabled={disabled}
      >
        I am a box
        <div>
          <h4 style={{ padding: "0px" }}>{output}</h4>
          {content ? content.type : "-"}
        </div>
      </button>
      <br />
    </>
  );
};

export default CardBox;
