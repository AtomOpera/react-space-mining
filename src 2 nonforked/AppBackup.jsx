import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const basicDeck = [
    { id: 1, card: "Extract", color: "0, 0, 0" },
    { id: 2, card: "Extract", color: "0, 0, 0" },
    { id: 3, card: "Extract", color: "0, 0, 0" },
    { id: 4, card: "Extract", color: "0, 0, 0" },
    { id: 5, card: "Shield", color: "0, 0, 0" },
    { id: 6, card: "Shield", color: "0, 0, 0" },
    { id: 7, card: "Shield", color: "0, 0, 0" },
    { id: 8, card: "Automation", color: "0, 0, 0" }
  ];

  //https://www.robinwieruch.de/react-state-array-add-update-remove

  const [drawPile, setDrawPile] = useState(basicDeck);
  const [hand, setHand] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);
  // let newDrawPile;
  // let newHand;
  // let newDiscardPile;

  // const DP = ({ list }) => {
  // or
  //
  //const shuffled = drawPile.sort(() => 0.5 - Math.random());

  
  function drawCards() {
    let newDrawPile = [...drawPile];
    let newHand = [...hand];
    let newDiscardPile = [...discardPile];
    console.log("ABRI new hand: ", newHand);
    console.log("ABRI new draw pile: ", newDrawPile);
    console.log("ABRI new discard pile: ", newDiscardPile);

    if (newHand != null && newHand.length != null && newHand.length > 0) {
      newDiscardPile.push(newHand[0]);
      newDiscardPile.push(newHand[1]);
      newDiscardPile.push(newHand[2]);
      newDiscardPile.push(newHand[3]);
      newHand.splice(0, 1);
      newHand.splice(0, 1);
      newHand.splice(0, 1);
      newHand.splice(0, 1);
    }

    newDrawPile.sort(() => 0.5 - Math.random());

    newHand.push(newDrawPile[0]);
    newHand.push(newDrawPile[1]);
    newHand.push(newDrawPile[2]);
    newHand.push(newDrawPile[3]);

    newDrawPile.splice(0, 1);
    newDrawPile.splice(0, 1);
    newDrawPile.splice(0, 1);
    newDrawPile.splice(0, 1);

    if (newDrawPile.length === 0) {
      newDrawPile = [...newDiscardPile];
      newDiscardPile = [];
    }

    setDrawPile(newDrawPile);
    setHand(newHand);
    setDiscardPile(newDiscardPile);
  }

  function start() {
    let newDrawPile = [...drawPile];
    let newHand = [...hand];

    console.log("ABRI new hand: ", newHand);
    console.log("ABRI new draw pile: ", newDrawPile);

    newDrawPile.sort(() => 0.5 - Math.random());

    newHand.push(newDrawPile[0]);
    newHand.push(newDrawPile[1]);
    newHand.push(newDrawPile[2]);
    newHand.push(newDrawPile[3]);

    newDrawPile.splice(0, 1);
    newDrawPile.splice(0, 1);
    newDrawPile.splice(0, 1);
    newDrawPile.splice(0, 1);

    setDrawPile(newDrawPile);
    setHand(newHand);
  }

  const DrP = () => {
    return (
      <>
        <div>
          <h2 style={{ padding: "10px" }}> Draw pile </h2>
          <ol style={{ padding: "10px" }} className="list-group">
            {// {this.list.map(listitem => (}
            //drawPile.map(listitem => (
            drawPile.map(listitem => (
              <li
                key={listitem.id}
                className="list-group-item list-group-item-primary"
              >
                {listitem.card}
              </li>
            ))}
          </ol>
        </div>
      </>
    );
  };

  const Hand = () => {
    return (
      <>
        <div>
          <h2 style={{ padding: "10px" }}> Hand </h2>
          <ol style={{ padding: "10px" }} className="list-group">
            {// {this.list.map(listitem => (}
            //hand.map(listitem => (
            hand.map(listitem => (
              <li
                key={listitem.id}
                className="list-group-item list-group-item-primary"
              >
                {listitem.card}
              </li>
            ))}
          </ol>
        </div>
      </>
    );
  };

  const DiP = () => {
    return (
      <>
        <div>
          <h2 style={{ padding: "10px" }}> Discard Pile </h2>
          <ol style={{ padding: "10px" }} className="list-group">
            {// {this.list.map(listitem => (}
            //discardPile.map(listitem => (
            discardPile.map(listitem => (
              <li
                key={listitem.id}
                className="list-group-item list-group-item-primary"
              >
                {listitem.card}
              </li>
            ))}
          </ol>
        </div>
      </>
    );
  };

  // https://upmostly.com/tutorials/simplifying-react-state-and-the-usestate-hook

  function drawCards() {
    //randomly move 3 cards from draw pile to hand
    //and if there are cards in hand, move them to discard pile
    //and if draw pile is empty, move all cards from discard pile to draw pile

    //hand = shuffled.slice(0, 1);
    //array2.push(array1[i]);
    //array1.splice(i, 1);
    //let newDrawPile = shuffled;

    //newHand = [...hand].push(drawPile[0]);
    //newHand = hand.push(drawPile[0]);
    //newHand = drawPile.splice(0, 1);
    //drawPile.sort(() => 0.5 - Math.random());
    //newDrawPile.splice(0, 1);
    //console.log('ABRI new hand: ', hand);
    //hand.push(drawPile[0]);
    //if (drawPile.length === 0) setDrawPile(drawPile.concat(discardPile));
    //setDrawPile(drawPile.sort(() => 0.5 - Math.random()));

    // https://stackoverflow.com/questions/57341541/removing-object-from-array-using-hooks-usestate
    // // assigning the list to temp variable
    // const temp = [...list];

    // // removing the element using splice
    // temp.splice(idx, 1);

    // // updating the list
    // updateList(temp);
    let newDrawPile = [...drawPile];
    let newHand = [...hand];
    let newDiscardPile = [...discardPile];
    console.log("ABRI new hand: ", newHand);
    console.log("ABRI new draw pile: ", newDrawPile);
    console.log("ABRI new discard pile: ", newDiscardPile);

    if (newHand != null && newHand.length != null && newHand.length > 0) {
      newDiscardPile.push(newHand[0]);
      newDiscardPile.push(newHand[1]);
      newDiscardPile.push(newHand[2]);
      newDiscardPile.push(newHand[3]);
      newHand.splice(0, 1);
      newHand.splice(0, 1);
      newHand.splice(0, 1);
      newHand.splice(0, 1);
    }

    newDrawPile.sort(() => 0.5 - Math.random());

    newHand.push(newDrawPile[0]);
    newHand.push(newDrawPile[1]);
    newHand.push(newDrawPile[2]);
    newHand.push(newDrawPile[3]);

    newDrawPile.splice(0, 1);
    newDrawPile.splice(0, 1);
    newDrawPile.splice(0, 1);
    newDrawPile.splice(0, 1);

    if (newDrawPile.length === 0) {
      newDrawPile = [...newDiscardPile];
      newDiscardPile = [];
    }

    setDrawPile(newDrawPile);
    setHand(newHand);
    setDiscardPile(newDiscardPile);

    //setHand(hand => hand.concat(drawPile[1]));
    //setHand(hand => hand.concat(drawPile[2]));

    //why push doesn't work:
    //https://medium.com/javascript-in-plain-english/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc

    // THIS WORKS
    // setDrawPile(drawPile.sort(() => 0.5 - Math.random()));
    // setHand(hand.concat(drawPile[0]));
    // setDrawPile(drawPile.splice(0, 1));

    // const newHand = [...hand];
    // setDrawPile(drawPile => drawPile.sort(() => 0.5 - Math.random()));
    // setHand(hand => hand.concat(drawPile[0]));
    // setDrawPile(drawPile.splice(0, 1));

    // console.log('ABRI new hand: ', hand);
    // console.log('ABRI new draw pile: ', drawPile);

    //setDrawPile(drawPile.splice(1, 1));
    //setDrawPile(drawPile.splice(2, 1));
    // if (hand.length !== 0) {
    //   setDiscardPile(discardPile.concat(hand[0]));
    //   setDiscardPile(discardPile.concat(hand[1]));
    //   setDiscardPile(discardPile.concat(hand[2]));

    //   setHand(hand.splice(0, 1));
    //   setHand(hand.splice(1, 1));
    //   setHand(hand.splice(2, 1));
    // };

    // setDrawPile(() => {
    //   drawPile.splice(0, 1);
    //   drawPile.sort(() => 0.5 - Math.random());
    // });

    // Get sub-array of first n elements after shuffled
    //let selected = shuffled.slice(0, n);

    // console.log('ABRI new hand: ', hand.concat(drawPile[0]));
    // console.log('ABRI new draw pile: ', drawPile);
  }

  function start() {
    let newDrawPile = [...drawPile];
    let newHand = [...hand];

    console.log("ABRI new hand: ", newHand);
    console.log("ABRI new draw pile: ", newDrawPile);

    newDrawPile.sort(() => 0.5 - Math.random());

    newHand.push(newDrawPile[0]);
    newHand.push(newDrawPile[1]);
    newHand.push(newDrawPile[2]);
    newHand.push(newDrawPile[3]);

    newDrawPile.splice(0, 1);
    newDrawPile.splice(0, 1);
    newDrawPile.splice(0, 1);
    newDrawPile.splice(0, 1);

    setDrawPile(newDrawPile);
    setHand(newHand);
  }

  function playCard() {
    let newDrawPile = [...drawPile];
    let newHand = [...hand];
    let newDiscardPile = [...discardPile];
    newDrawPile.sort(() => 0.5 - Math.random());
    console.log("ABRI new hand: ", newHand);
    console.log("ABRI new draw pile: ", newDrawPile);
    console.log("ABRI new discard pile: ", newDiscardPile);

    if (newHand != null && newHand.length != null && newHand.length > 0) {
      newDiscardPile.push(newHand[0]);
      newHand.splice(0, 1);
      newHand.push(newDrawPile[0]);
      newDrawPile.splice(0, 1);
    } else {
      newHand.push(newDrawPile[0]);
      newHand.push(newDrawPile[1]);
      newHand.push(newDrawPile[2]);
      newHand.push(newDrawPile[3]);
      newDrawPile.splice(0, 1);
      newDrawPile.splice(0, 1);
      newDrawPile.splice(0, 1);
      newDrawPile.splice(0, 1);
    }

    if (newDrawPile.length === 0) {
      newDrawPile = [...newDiscardPile];
      newDiscardPile = [];
    }

    setDrawPile(newDrawPile);
    setHand(newHand);
    setDiscardPile(newDiscardPile);
  }

  const Box = (props) => {
    let output = "empty";
    if (props.content !== undefined) {
      output = props.content.card;
    }
    return (
      <>
        <button style={{ margin: "10px", padding: "10px" }}> I am a box 
        <div>
          <h2 style={{ padding: "10px" }}> {output} </h2>
        </div>
        </button>
        <br />
      </>
    );
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Box content={hand[0]} />
        <Box content={hand[1]} />
        <Box content={hand[2]} />
        <Box content={hand[3]} />
      </div>
      <h1> {"\n "}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        
        <DrP />
        <Hand />
        <DiP />
      </div>
      <div>
        <button className="startButton" onClick={start}>
          Start game{" "}
        </button>
        <button className="playCardButton" onClick={playCard}>
          Play card{" "}
        </button>
        <button className="nextButton" onClick={drawCards}>
          Next{" "}
        </button>
      </div>
    </div>
  );
}
