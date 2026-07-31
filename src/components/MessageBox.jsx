  import React from "react";
  
  const MessageBox = ({ history, ...props}) => {
    let output = "empty";
    if (props.content !== undefined) {
      output = props.content.card;
    }
    //const history = [];
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

            <h4 style={{ padding: "10px" }}> {history} </h4>
            {/* <ol style={{ padding: "10px" }} className="list-group">
            {history.map((listitem) => (
              <li
                key={listitem}
                className="list-group-item list-group-item-primary"
              >
                {listitem}
              </li>
            ))
            }
        </ol> */}
        </div>
        <br />
      </>
    );
  };

  export default MessageBox;
