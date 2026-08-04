import React, { useState } from "react";
import App from "../App";

const CardBox = ({
  content,
  pos,
  playCard,
  setDescription,
  changeDescription,
  buttonDisabled,
  resources,
}) => {
  let output = "empty";
  let disabled = false;
  let cost = 0;
  if (content !== undefined) {
    output = `${content.card}+${content.actions[0].quantity}`;
    cost = content.cost;
    if (cost > resources) disabled = true;
  }
  // console.log('cost: ', cost);
  // console.log('resources: ', resources);
  return (
    <>
      <button
        style={{
          height: "100px",
          width: "300px",
          margin: "10px",
          padding: "10px"
        }}
        onClick={() => {
          playCard({ content, pos });
        }}
        // onMouseEnter={() => changeDescription(props.content)}
        // onMouseLeave={() => changeDescription("")}
        onMouseEnter={() =>
          setDescription(content ? content.description : "nothing here")
        }
        onMouseLeave={() => setDescription("")}
        disabled={disabled}
      >
        Cost: {content ? content.cost : "-"}
        <div>
          <h5 style={{ padding: "0px" }}> {output} </h5>
          {content ? content.type : "-"}
        </div>
      </button>
      <br />
    </>
  );
};

export default CardBox;

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
