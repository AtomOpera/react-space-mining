import React, { useState, useEffect } from "react";
import "./styles.css";
import basicDeck from "./components/basicDeck";
import asteroidDeck from "./components/asteroidDeck";
import itemsDeck from "./components/itemsDeck";
import oreDeck from "./components/oreDeck";
import DescriptionBox from "./components/DescriptionBox";
import MessageBox from "./components/MessageBox";
import DebuggerBox from "./components/DebuggerBox";
import CardBox from "./components/CardBox";
import AsteroidBox from "./components/AsteroidBox";

export default function App() {
  //https://www.robinwieruch.de/react-state-array-add-update-remove

  const [drawPile, setDrawPile] = useState(basicDeck);
  const [hand, setHand] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);

  const [oreDrawPile, setOreDrawPile] = useState(oreDeck);
  const [oredHand, setOreHand] = useState([]);
  const [oreDiscardPile, setOreDiscardPile] = useState([]);

  const [itemsDrawPile, setItemsDrawPile] = useState(itemsDeck);
  const [itemsHand, setItemsHand] = useState([]);
  const [itemsDiscardPile, setItemsDiscardPile] = useState([]);

  const [asteroidDrawPile, setAsteroidDrawPile] = useState(oreDeck);
  const [asteroidHand, setAsteroidHand] = useState([]);
  const [asteroidDiscardPile, setAsteroidDiscardPile] = useState([]);

  const [description, setDescription] = useState("");
  const [mana, setMana] = useState(3);
  const [ore, setOre] = useState(50);
  const [totalMana, setTotalMana] = useState(mana);
  const [life, setLife] = useState(50);
  const [shield, setShield] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [resources, setResources] = useState(0);
  const [extraction, setExtraction] = useState(0);

  // https://upmostly.com/tutorials/simplifying-react-state-and-the-usestate-hook

  function drawCards() {}

  const createNewOreDeck = (newHand, newDrawPile) => {
    for (let i = 0; i < 5; i = i + 1) {
      newHand.push(newDrawPile[0]);
      newDrawPile.splice(0, 1);
    }
  };

  const drawNewItems = (newItemsHand, newItemsDrawPile) => {
    for (let i = 0; i < 5; i = i + 1) {
      newItemsHand.push(newItemsDrawPile[0]);
      newItemsDrawPile.splice(0, 1);
    }
  };

  const drawNewHand = (newHand, newDrawPile) => {
    for (let i = 0; i < 5; i = i + 1) {
      newHand.push(newDrawPile[0]);
      newDrawPile.splice(0, 1);
    }
    // let total = 0;
    // newHand.map((c) => {
    //   if (c.actions[0].type === "resources") {
    //     total += 1;
    //   }
    // });
    // setResources(total);
  };

  const drawNewAsteroid = (newAsteridHand, newAsteroidDrawPile) => {
    for (let i = 0; i < 5; i = i + 1) {
      newAsteridHand.push(newAsteroidDrawPile[0]);
      newAsteroidDrawPile.splice(0, 1);
    }
  };

  const calculateResources = () => {
    let total = 0;
    hand.map((c) => {
      if (c.actions[0].type === "resources") {
        total += 1;
      }
    });
    // setResources(total);
    // console.log("resources: ", total);
    return total;
  };

  const calculateExtraction = () => {
    let total = 0;
    hand.map((c) => {
      if (c.actions[0].type === "damage") {
        total += 1;
      }
    });
    return total;
  };

  useEffect(() => {
    calculateResources();
    calculateExtraction();
  }, []);

  // This cuold be a function
  const asteroidTurn = () => {
    console.log("asteroidHand: ", asteroidHand);
    if (asteroidHand != [] && asteroidHand.length != 0) {
      const damage = asteroidHand[0].actions[0].quantity;
      console.log("damage: ", damage);
      let thisShield;
      let totalDamage;
      let thisLife = 0;
      if (damage - shield > 0) {
        totalDamage = damage - shield;
        console.log("totalDamage: ", totalDamage);
        thisLife = life - totalDamage;
        console.log("thisLife: ", thisLife);
        setLife(thisLife);
      }
    }
    let newAsteroidDrawPile = [...asteroidDrawPile];
    let newAsteroidHand = [...asteroidHand];
    let newAsteroidDiscardPile = [...asteroidDiscardPile];
    newAsteroidDrawPile.sort(() => 0.5 - Math.random());
    console.log("ABRI new A hand: ", newAsteroidHand);
    console.log("ABRI new A draw pile: ", newAsteroidDrawPile);
    console.log("ABRI new A discard pile: ", newAsteroidDiscardPile);
    if (newAsteroidHand[0] !== undefined)
      newAsteroidDiscardPile.push(newAsteroidHand[0]);
    setAsteroidDiscardPile(newAsteroidDiscardPile);
    newAsteroidHand.splice(0, 1);
    newAsteroidHand.push(newAsteroidDrawPile[0]);
    setAsteroidHand(newAsteroidHand);
    newAsteroidDrawPile.splice(0, 1);
    setAsteroidDrawPile(newAsteroidDrawPile);

    //newAsteroidHand.splice(0, 1, newAsteroidDrawPile[0]);
    //newAsteroidDiscardPile.push(newAsteroidHand[0]);
    //newHand.push(newDrawPile[0]);
    //newAsteroidDrawPile.splice(0, 1);

    // console.log("newAsteroidDiscardPile: ", newAsteroidDiscardPile);
    // if (
    //   newAsteroidDiscardPile != null &&
    //   newAsteroidDiscardPile.length != null &&
    //   newAsteroidDiscardPile.length > 0
    // ) {
    //   console.log("I am in");
    //   setAsteroidDiscardPile(newAsteroidDiscardPile);
    // }
    setShield(0);
  };

  async function playCard({ content, pos }) {
    // let cardPlayed = content;
    // let newMana = mana;
    // if (content !== undefined && content.action === "attack") {
    //   setOre(ore - cardPlayed.quantity);
    // }
    // if (content !== undefined && content.action === "deffence") {
    //   setShield(shield + cardPlayed.quantity);
    // }
    // if (content !== undefined && content.action === "mana") {
    //   // const totalmana = mana + cardPlayed.quantity;
    //   newMana = newMana + cardPlayed.quantity;
    //   setMana(newMana);
    //   // console.log("setting mana: ", totalmana);
    //   console.log("setting mana: ", mana);
    //   console.log("setting mana: ", cardPlayed.quantity);
    // }
    // let newDrawPile = [...itemsDrawPile];
    let newDrawPile = [...drawPile]; //itemsDrawPile
    let newHand = [...hand];
    let newDiscardPile = [...discardPile];
    newDrawPile.sort(() => 0.5 - Math.random());
    let newAsteroidDrawPile = [...asteroidDrawPile];
    let newAsteroidHand = [...asteroidHand];
    let newAsteroidDiscardPile = [...asteroidDiscardPile];
    newAsteroidDrawPile.sort(() => 0.5 - Math.random());
    let newItemsDrawPile = [...itemsDrawPile];
    let newItemsHand = [...itemsHand];
    let newItemsDiscardPile = [...itemsDiscardPile];
    newAsteroidDrawPile.sort(() => 0.5 - Math.random());
    //alert(props.content.card);
    //alert(newHand.findIndex(x => x.id === props.content.id));
    //alert(newHand.includes(props.content.id));

    if (
      newItemsHand != null &&
      newItemsHand.length != null &&
      newItemsHand.length > 0
    ) {
      // newHand find the id
      //newDiscardPile.push(newHand[0]);
      const index = newItemsHand.findIndex((x) => x.id === content.id);
      //newDiscardPile.push(newHand[0]);
      setResources(resources - newItemsHand[index].cost);
      newDiscardPile.push(newItemsHand[index]);
      //I need the index of the card to be removed down here:
      // a = [
      //   {prop1:"abc",prop2:"qwe"},
      //   {prop1:"bnmb",prop2:"yutu"},
      //   {prop1:"zxvz",prop2:"qwrq"}];

      // index = a.findIndex(x => x.prop2 ==="yutu");

      // console.log(index);
      newItemsHand.splice(index, 1, newItemsDrawPile[0]);
      //newHand.push(newDrawPile[0]);
      newItemsDrawPile.splice(0, 1);
      // calculateResources();
      // newMana = newMana - 1;
      // setMana(newMana);

      // } else {
      //   setMana(newMana);
      // }
    } else {
      drawNewHand(newHand, newDrawPile);
      drawNewAsteroid(newAsteroidHand, newAsteroidDrawPile);
      drawNewItems(newItemsHand, newItemsDrawPile);
      //setResources(calculateResources());
      //calculateExtraction();
      //asteroidTurn();
    }

    if (newDrawPile.length === 0) {
      newDrawPile = [...newDiscardPile];
      newDiscardPile = [];
    }

    setDrawPile(newDrawPile);
    setHand(newHand);
    setDiscardPile(newDiscardPile);
    console.log(content);
    console.log(pos);
    setAsteroidDrawPile(newAsteroidDrawPile);
    setAsteroidHand(newAsteroidHand);
    setAsteroidDiscardPile(newAsteroidDiscardPile);
    setItemsDrawPile(newItemsDrawPile);
    setItemsHand(newItemsHand);
    setItemsDiscardPile(newItemsDiscardPile);
    //setDescription("");
    //can you set description here? do we know where the mouse is?
    setDescription(newHand[pos].description);

    //setDescription(props.pos);
    function timeout(delay) {
      return new Promise((res) => setTimeout(res, delay));
    }
    await timeout(3000);

    if (mana === 1) {
      asteroidTurn();
      setMana(totalMana);
    }
    // setResources(resources - calculateResources());
  }

  function changeDescription(e) {
    if (e === undefined) {
      setDescription("nothing here");
      console.log("nothing here");
    } else {
      setDescription(e.description);
      //console.log("object: ", e.description);
    }
  }

  return (
    <div className="App">
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
      <div
        style={{
          marginTop: "0px",
          padding: "0px"
        }}
      >
        <div>Available items:</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <CardBox
          content={itemsHand[0]}
          pos="0"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          buttonDisabled={buttonDisabled}
          resources={calculateResources()}
        />
        <CardBox
          content={itemsHand[1]}
          pos="1"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          buttonDisabled={buttonDisabled}
          resources={calculateResources()}
        />
        <CardBox
          content={itemsHand[2]}
          pos="2"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          buttonDisabled={buttonDisabled}
          resources={calculateResources()}
        />
        <CardBox
          content={itemsHand[3]}
          pos="3"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          buttonDisabled={buttonDisabled}
          resources={calculateResources()}
        />
        <CardBox
          content={itemsHand[4]}
          pos="4"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          buttonDisabled={buttonDisabled}
          resources={calculateResources()}
        />
      </div>
      <div
        style={{
          margin: "10px",
          padding: "10px"
        }}
      >
        <div>
          Resources: <b>{resources}</b>
          {calculateResources()} | Extraction: <b>{calculateExtraction()}</b>{" "}
        </div>
        <div>Sector: 123456 | Asteroid: {calculateExtraction()} </div>
        <div>
          Draw Pile: {drawPile.length} | Discard Pile: {discardPile.length}{" "}
        </div>
        <div>
          Functional Capacity: {drawPile.length} | Deterioriating rate:{" "}
          {discardPile.length}{" "}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <DebuggerBox title="Hand" cards={hand} />
      </div>
      <div></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <DebuggerBox title="Draw Pile" cards={drawPile} />
        <DebuggerBox title="Discard Pile" cards={discardPile} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <MessageBox />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <AsteroidBox
          content={asteroidHand[0]}
          pos="0"
          setDescription={setDescription}
          //changeDescription={changeDescription}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p>
          Remaining to substract <b>{ore}</b>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <DescriptionBox
          //pos="0"
          //content={asteroidDeck}
          description={description}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <p>
          <span
            onMouseEnter={() =>
              setDescription("Manufacturing Actions in Network of Assets")
            }
            onMouseLeave={() => setDescription("")}
          >
            Mana{" "}
          </span>
          <b>{mana}</b> | Mission Functional Capacity <b>{life}</b> | Shield{" "}
          <b>{shield}</b>
        </p>
      </div>
      <h1> {"\n "}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <DebuggerBox title="A Draw Pile" cards={asteroidDrawPile} />
        <DebuggerBox title="A Hand" cards={asteroidHand} />
        <DebuggerBox title="A Discard Pile" cards={asteroidDiscardPile} />
      </div>

      <div>
        <button className="startButton" onClick={drawNewHand}>
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
