import React from "react";
import AsteroidBox from "./AsteroidBox";

export default function AvailableOreRow({
  asteroidHand,
  setDescription,
  playCard,
  calculateExtraction
}) {
  return (
    <>
      <div
        style={{
          marginTop: "15px",
          padding: "0px"
        }}
      >
        <div>Available ore:</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* {[...Array(5)].map((x, i) => (
        <AsteroidBox
          key={i}
          content={asteroidHand[i]}
          pos={i}
          setDescription={setDescription}
          playCard={playCard}
          extraction={calculateExtraction()}
        />
      ))} */}
        <AsteroidBox
          content={asteroidHand[0]}
          pos="0"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          extraction={calculateExtraction()}
        />
        <AsteroidBox
          content={asteroidHand[1]}
          pos="1"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          extraction={calculateExtraction()}
        />
        <AsteroidBox
          content={asteroidHand[2]}
          pos="2"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          extraction={calculateExtraction()}
        />
        <AsteroidBox
          content={asteroidHand[3]}
          pos="3"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          extraction={calculateExtraction()}
        />
        <AsteroidBox
          content={asteroidHand[4]}
          pos="3"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          extraction={calculateExtraction()}
        />
      </div>
    </>
  );
}
