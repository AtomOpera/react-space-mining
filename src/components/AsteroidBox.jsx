import React, { useState } from "react";
// import App from "../App";

const Actions = (props) => {
  return (
    <>
      {props.content ? (
        props.content.actions.map((a) => (
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

const AsteroidBox = ({
  content,
  pos,
  playCard,
  setDescription,
  changeDescription
}) => {
  let output = "empty";
  let descrip;
  if (content !== undefined) {
    output = content.card;
    descrip = content.description;
  }
  // console.log(content);

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
        //onClick={() => playCard({ content, pos })}
        // onMouseEnter={() => changeDescription(props.content)}
        // onMouseLeave={() => changeDescription("")}
        // onMouseEnter={() => {
        //   console.log(content.description);
        //   console.log(content.card);
        //   setDescription(content ? descrip : "nothing here")
        // }
        // }
        // onMouseLeave={() => changeDescription("")}
      >
        {content ? content.description : ""}
        <div>
          <h4 style={{ padding: "0px" }}> {output} </h4>
          <span>Next turn: </span>
          <Actions content={content} />
          {/* {"Next turn: "}
          {content ? content.quantity : "-"}
          {" "}
          {content ? content.type : "-"} */}
        </div>
      </button>
      <br />
    </>
  );
};

export default AsteroidBox;
