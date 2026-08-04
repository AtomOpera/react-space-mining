  import React from "react";
  
  const MessageBox = (props) => {
    let output = "empty";
    if (props.content !== undefined) {
      output = props.content.card;
    }
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
          <div>
            <h4 style={{ padding: "10px" }}> {output} </h4>
          </div>
        </div>
        <br />
      </>
    );
  };

  export default MessageBox;
