import React from "react";

const DescriptionBox = (props) => {
  // let output = "empty";
  // if (props.content !== undefined) {
  //   output = props.content.card;
  // }

  // let output = props.content ? props.content : "empty";
  return (
    <>
      <div
        style={{
          height: "50px",
          width: "100%",
          margin: "10px",
          padding: "10px"
        }}
      >
        {" "}
        <div>
          <h4 style={{ padding: "10px" }}> {props.description} </h4>
        </div>
      </div>
      <br />
    </>
  );
};

export default DescriptionBox;
