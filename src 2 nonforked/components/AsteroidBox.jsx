import React, { useState } from "react";
import App from "../App";

const AsteroidBox = ({
  content,
  pos,
  playCard,
  setDescription,
  changeDescription,
  extraction
}) => {
  let output = "empty";
  let disabled = false;
  let cost = 0;
  if (content !== undefined) {
    output = content.card;
    cost = content.actions[0].quantity;
    if (cost > extraction) disabled = true;
  }
  // console.log(content);

  return (
    <>
      <button
        style={{
          height: "100px",
          width: "300px",
          margin: "10px"
        }}
        onClick={() => playCard({ content, pos })}
        // onMouseEnter={() => changeDescription(props.content)}
        // onMouseLeave={() => changeDescription("")}
        onMouseEnter={() =>
          setDescription(content ? content.description : "nothing here")
        }
        onMouseLeave={() => setDescription("")}
        disabled={disabled}
      >
        <div>
          <h4 style={{ padding: "0px" }}> {output} </h4>
          {content ? content.actions[0].quantity : "-"}
        </div>
      </button>
      <br />
    </>
  );
};

export default AsteroidBox;

// const Box = (props) => {
//   let output = "empty";
//   if (props.content !== undefined) {
//     output = props.content.card;
//   }

//   return (
//     <>
//       <button
//         style={{
//           height: "100px",
//           width: "300px",
//           margin: "10px",
//           padding: "10px"
//         }}
//         onClick={() => playCard(props)}
//         // onMouseEnter={() => changeDescription(props.content)}
//         // onMouseLeave={() => changeDescription("")}
//         onMouseEnter={() =>
//           setDescription(
//             props.content ? props.content.description : "nothing here"
//           )
//         }
//         onMouseLeave={() => changeDescription("")}
//       >
//         I am a box
//         <div>
//           <h4 style={{ padding: "0px" }}> {output} </h4>
//           {props.content ? props.content.type : "-"}
//         </div>
//       </button>
//       <br />
//     </>
//   );
// };
