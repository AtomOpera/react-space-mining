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

  return (
    <>
      <div>
        <h2 style={{ padding: "10px" }}> {props.title} </h2>
        <ol style={{ padding: "10px" }} className="list-group">
          {props.cards[0] !== undefined ? (
            props.cards.map((listitem) => (
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
