import React, { useState } from "react";

const DebuggerBox = (props) => {
  //   const list = (props) => {
  //     if (props.cards) {
  //       return (
  //       props.cards.map((listitem) => (
  //         <li
  //           key={listitem.id}
  //           className="list-group-item list-group-item-primary"
  //         >
  //           {listitem.card}
  //         </li>
  //       ));

  //       );
  //     }
  //   };
  const outputArray = [];
  if (props.cards[0] !== undefined) {
    props.cards.map((listitem) => {
      outputArray.push(`${listitem.card}+${listitem.actions[0].quantity}`)
    })
  }
  return (
    <>
      <div style={{ height: "250px"}}>
        <h3 style={{ padding: "5px" }}> {props.title} </h3>
        <span>
        {outputArray.join(', ')}
        </span>
        {/* <ol style={{ padding: "5px" }} className="list-group">
          {props.cards[0] !== undefined ? (
            props.cards.map((listitem) => (
              <li style={{ listStyleType: "none" }}
                key={listitem.id}
                className="list-group-item list-group-item-primary"
              >
                {`${listitem.card} +${listitem.actions[0].quantity}`}
              </li>
            ))
          ) : (
            <></>
          )}
        </ol> */}
      </div>
    </>
  );
};

export default DebuggerBox;
