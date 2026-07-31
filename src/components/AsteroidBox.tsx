import type { AsteroidCard } from '../types';

interface ActionsProps {
  content?: AsteroidCard;
}

const Actions = ({ content }: ActionsProps) => {
  return (
    <>
      {content ? (
        content.actions.map((a) => (
          <span key={a.key}>
            {a.quantity} {a.type}
          </span>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

interface AsteroidBoxProps {
  content?: AsteroidCard;
  pos?: string;
  playCard?: (params: { content?: AsteroidCard; pos?: string }) => void;
  setDescription: (description: string) => void;
  changeDescription?: (content?: AsteroidCard) => void;
}

const AsteroidBox = ({
  content,
  setDescription
}: AsteroidBoxProps) => {
  const output = content?.card ?? "empty";
  const descrip = content?.description ?? "";

  return (
    <>
      <button
        style={{
          height: "100px",
          width: "300px",
          margin: "10px",
          padding: "10px"
        }}
        onMouseEnter={() => setDescription(content ? descrip : "nothing here")}
        onMouseLeave={() => setDescription("")}
      >
        {content ? content.description : ""}
        <div>
          <h4 style={{ padding: "0px" }}>{output}</h4>
          <span>Next turn: </span>
          <Actions content={content} />
        </div>
      </button>
      <br />
    </>
  );
};

export default AsteroidBox;
