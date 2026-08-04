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
import AvailableOreRow from "./components/AvailableOreRow";

export default function App() {
  //https://www.robinwieruch.de/react-state-array-add-update-remove

  const [drawPile, setDrawPile] = useState(basicDeck);
  const [hand, setHand] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);

  // const [oreDrawPile, setOreDrawPile] = useState(oreDeck);
  // const [oredHand, setOreHand] = useState([]);
  // const [oreDiscardPile, setOreDiscardPile] = useState([]);
  const [itemsDrawPile, setItemsDrawPile] = useState(itemsDeck);
  const [itemsHand, setItemsHand] = useState([]);
  const [itemsDiscardPile, setItemsDiscardPile] = useState([]);

  const [asteroidDrawPile, setAsteroidDrawPile] = useState([]);
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
  const [totalResources, setTotalResources] = useState(0);
  const [extraction, setExtraction] = useState(0);
  const [totalExtraction, setTotalExtraction] = useState(0);
  const [cost, setCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [damage, setDamage] = useState(0);

  // https://upmostly.com/tutorials/simplifying-react-state-and-the-usestate-hook

  function drawCards() {}

  const createNewOreDeck = (newHand, newDrawPile) => {
    for (let i = 0; i < 5; i = i + 1) {
      newHand.push(newDrawPile[0]);
      newDrawPile.splice(0, 1);
    }
  };

  const drawNewHand = (newHand, newDrawPile, newDiscardPile) => {
    newDrawPile.sort(() => 0.5 - Math.random());
    for (let i = 0; i < 5; i = i + 1) {
      if (newDrawPile.length === 0) {
        newDrawPile = [...newDiscardPile];
        newDiscardPile = [];
        newDrawPile.sort(() => 0.5 - Math.random());
      }
      newHand.push(newDrawPile[0]);
      newDrawPile.splice(0, 1);
    }
    return { newHand, newDrawPile, newDiscardPile };
  };

  const drawNewItems = (
    newItemsHand,
    newItemsDrawPile,
    newItemsDiscardPile
  ) => {
    newItemsDrawPile.sort(() => 0.5 - Math.random());
    for (let i = 0; i < 5; i = i + 1) {
      if (newItemsDrawPile.length === 0) {
        newItemsHand = [...newItemsDiscardPile];
        newItemsDiscardPile = [];
        newItemsDrawPile.sort(() => 0.5 - Math.random());
      }
      newItemsHand.push(newItemsDrawPile[0]);
      newItemsDrawPile.splice(0, 1);
    }
  };

  const drawNewAsteroid = (
    newAsteroidHand,
    newAsteroidDrawPile,
    newAsteroidDiscardPile
  ) => {
    newAsteroidDrawPile.sort(() => 0.5 - Math.random());
    for (let i = 0; i < 5; i = i + 1) {
      if (newAsteroidDrawPile.length === 0) {
        newAsteroidDrawPile = [...newAsteroidDiscardPile];
        newAsteroidDiscardPile = [];
        newAsteroidDrawPile.sort(() => 0.5 - Math.random());
      }
      newAsteroidHand.push(newAsteroidDrawPile[0]);
      newAsteroidDrawPile.splice(0, 1);
    }
  };

  const calculateResources = () => {
    let total = 0;
    hand.map((c) => {
      if (c.actions[0].type === "resources") {
        total += c.actions[0].quantity;
      }
    });
    // setResources(total);
    // console.log("resources: ", total);
    // console.log("total: ", total);
    // console.log("cost: ", cost);
    return total + 5 - cost;
  };

  const calculateR = () => {
    let total = 0;
    hand.map((c) => {
      if (c.actions[0].type === "damage") {
        total += c.actions[0].quantity;
      }
    });
    setResources(total);
    return total;
  };

  const calculateExtraction = () => {
    let total = 0;
    hand.map((c) => {
      if (c.actions[0].type === "damage") {
        total += c.actions[0].quantity;
      }
    });
    return total - damage;
  };

  // useEffect(() => {
  //   calculateResources();
  //   calculateExtraction();
  // }, []);

  function getNewOreDeck() {
    let newOreDeck = [];
    const selection = [1, 2, 3, 4, 5];
    for (let i = 0; i < 5; i = i + 1) {
      oreDeck.forEach((e) => {
        if (e.id === selection[i]) {
          newOreDeck.push(e);
        }
      });
    }
    return newOreDeck;

    // const newOreDeck = oreDeck.filter((e) => {
    //   return e.actions[0].difficulty === "Easy";
    // });
    // return newOreDeck;

    // const newOreDeck = oreDeck.filter((e) => {
    //   for (let i = 0; i < 5; i = i + 1) {
    //     // console.log('e.actions[0].difficulty: ', e.actions[0].difficulty);
    //     if (e.actions[0].difficulty === "Easy") {
    //       // console.log('e: ', e);
    //       return e;
    //     }
    //   }
    // });
    // return newOreDeck;
  }



  function nextTurn() {
    // console.log("asteroidDrawPile: ", asteroidDrawPile);
    // *** Setting piles from state ***
    let newDrawPile = [...drawPile]; //itemsDrawPile
    let newHand = [...hand];
    let newDiscardPile = [...discardPile];
    // newDrawPile.sort(() => 0.5 - Math.random());
    // let newAsteroidDrawPile = [...asteroidDrawPile];
    // let newAsteroidHand = [...asteroidHand];
    // let newAsteroidDiscardPile = [...asteroidDiscardPile];
    // newAsteroidDrawPile.sort(() => 0.5 - Math.random());
    let newItemsDrawPile = [...itemsDrawPile];
    let newItemsHand = [...itemsHand];
    let newItemsDiscardPile = [...itemsDiscardPile];
    newItemsDrawPile.sort(() => 0.5 - Math.random());

    // *** refill items pile ***
    // setLife(newItemsDrawPile.length);
    // let length = newItemsDrawPile.length;
    // for (let i = 0; i < length; i = i + 1) {
    //   newItemsDrawPile.push(newItemsHand[0]);
    //   newItemsHand.splice(0, 1);
    // }

    // *** draw new cards and refill draw plie if empty ***
    // for (let i = 0; i < 5; i = i + 1) {
    //   if (newDrawPile.length === 0) {
    //     newDrawPile = [...newDiscardPile];
    //     newDiscardPile = [];
    //   }
    //   newHand.push(newDrawPile[0]);
    //   newDrawPile.splice(0, 1);
    // }

    // *** discard piles ***
    if (newHand.length !== 0) {
      for (let a = 0; a < 5; a = a + 1) {
        // setLife(1000 + i);

        newDiscardPile.push(newHand[0]);
        newHand.splice(0, 1);

        newItemsDiscardPile.push(newItemsHand[0]);
        newItemsHand.splice(0, 1);

        // newAsteroidDiscardPile.push(newAsteroidHand[0]);
        // newAsteroidHand.splice(0, 1);
      }
    }

    // *** refill piles ***
    newDrawPile.sort(() => 0.5 - Math.random());
    // console.log("newDiscardPile: ", newDiscardPile);
    for (let i = 0; i < 5; i = i + 1) {
      // console.log("newDrawPile.length: ", newDrawPile.length);
      if (newDrawPile.length === 0) {
        newDrawPile = [...newDiscardPile];
        newDiscardPile = [];
        newDrawPile.sort(() => 0.5 - Math.random());
      }
      newHand.push(newDrawPile[0]);
      newDrawPile.splice(0, 1);
    }

    newItemsDrawPile.sort(() => 0.5 - Math.random());
    for (let i = 0; i < 5; i = i + 1) {
      // console.log("newItemsDrawPile.length: ", newItemsDrawPile.length);
      if (newItemsDrawPile.length === 0) {
        newItemsDrawPile = [...newItemsDiscardPile];
        newItemsDiscardPile = [];
        newItemsDrawPile.sort(() => 0.5 - Math.random());
      }
      newItemsHand.push(newItemsDrawPile[0]);
      newItemsDrawPile.splice(0, 1);
    }

    // newAsteroidDrawPile.sort(() => 0.5 - Math.random());
    // for (let i = 0; i < 5; i = i + 1) {
    //   if (newAsteroidDrawPile.length === 0) {
    //     newAsteroidDrawPile = [...newAsteroidDiscardPile];
    //     newAsteroidDiscardPile = [];
    //     newAsteroidDrawPile.sort(() => 0.5 - Math.random());
    //   }
    //   newAsteroidHand.push(newAsteroidDrawPile[0]);
    //   newAsteroidDrawPile.splice(0, 1);
    // }

    // drawNewHand(newHand, newDrawPile, newDiscardPile);
    // drawNewAsteroid(
    //   newAsteroidHand,
    //   newAsteroidDrawPile,
    //   newAsteroidDiscardPile
    // );
    // drawNewItems(newItemsHand, newItemsDrawPile, newItemsDiscardPile);

    // *** setting the state
    setDrawPile(newDrawPile);
    setHand(newHand);
    setDiscardPile(newDiscardPile);
    // console.log(content);
    // console.log(pos);
    // setAsteroidDrawPile(newAsteroidDrawPile);
    // setAsteroidHand(newAsteroidHand);
    // setAsteroidDiscardPile(newAsteroidDiscardPile);
    setItemsDrawPile(newItemsDrawPile);
    setItemsHand(newItemsHand);
    setItemsDiscardPile(newItemsDiscardPile);
    setCost(0);
    setDamage(0);
    setResources(calculateResources());
    setExtraction(calculateExtraction());

    // if (newAsteroidDrawPile.length === 0) {
    //   newAsteroidDrawPile = [...newAsteroidDiscardPile];
    //   newAsteroidDiscardPile = [];
    // }

    // if (newItemsDrawPile.length === 0) {
    //   newItemsDrawPile = [...newItemsDiscardPile];
    //   newItemsDiscardPile = [];
    // }
    // if (newDrawPile.length === 0) {
    //   newDrawPile = [...newDiscardPile];
    //   newDiscardPile = [];
    // }

    // drawNewHand(newHand, newDrawPile, newDiscardPile);

    //setDescription("");
    //can you set description here? do we know where the mouse is?
    // setDescription(newHand[pos].description);
  }

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
    // let newAsteroidDrawPile = [...asteroidDrawPile];
    // let newAsteroidHand = [...asteroidHand];
    // let newAsteroidDiscardPile = [...asteroidDiscardPile];
    // newAsteroidDrawPile.sort(() => 0.5 - Math.random());
    let newItemsDrawPile = [...itemsDrawPile];
    let newItemsHand = [...itemsHand];
    let newItemsDiscardPile = [...itemsDiscardPile];
    newItemsDrawPile.sort(() => 0.5 - Math.random());
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
      setCost(cost + newItemsHand[index].cost);
      newDiscardPile.push(newItemsHand[index]);
      // newItemsDiscardPile.push(newItemsHand[index]);
      newItemsDrawPile.push(newItemsHand[index]);
      newItemsHand.splice(index, 1, newItemsDrawPile[0]); //newItemsDrawPile[0]
      newItemsDrawPile.splice(0, 1);

      //I need the index of the card to be removed down here:
      // a = [
      //   {prop1:"abc",prop2:"qwe"},
      //   {prop1:"bnmb",prop2:"yutu"},
      //   {prop1:"zxvz",prop2:"qwrq"}];

      // index = a.findIndex(x => x.prop2 ==="yutu");

      // console.log(index);
      //newItemsHand.splice(index, 1, newItemsDrawPile[0]);
      //newHand.push(newDrawPile[0]);
      //newItemsDrawPile.splice(0, 1);
      // calculateResources();
      // newMana = newMana - 1;
      // setMana(newMana);

      // } else {
      //   setMana(newMana);
      // }
    } else {
      // *** New game ***
      startNewGame();
      newDrawPile.sort(() => 0.5 - Math.random());
      for (let i = 0; i < 5; i = i + 1) {
        if (newDrawPile.length === 0) {
          newDrawPile = [...newDiscardPile];
          newDiscardPile = [];
          newDrawPile.sort(() => 0.5 - Math.random());
        }
        newHand.push(newDrawPile[0]);
        newDrawPile.splice(0, 1);
      }

      newItemsDrawPile.sort(() => 0.5 - Math.random());
      for (let i = 0; i < 5; i = i + 1) {
        if (newItemsDrawPile.length === 0) {
          newItemsHand = [...newItemsDiscardPile];
          newItemsDiscardPile = [];
          newItemsDrawPile.sort(() => 0.5 - Math.random());
        }
        newItemsHand.push(newItemsDrawPile[0]);
        newItemsDrawPile.splice(0, 1);
      }

      // newAsteroidDrawPile.sort(() => 0.5 - Math.random());
      // for (let i = 0; i < 5; i = i + 1) {
      //   if (newAsteroidDrawPile.length === 0) {
      //     newAsteroidDrawPile = [...newAsteroidDiscardPile];
      //     newAsteroidDiscardPile = [];
      //     newAsteroidDrawPile.sort(() => 0.5 - Math.random());
      //   }
      //   newAsteroidHand.push(newAsteroidDrawPile[0]);
      //   newAsteroidDrawPile.splice(0, 1);
      // }

      // drawNewHand(newHand, newDrawPile, newDiscardPile);
      // drawNewAsteroid(
      //   newAsteroidHand,
      //   newAsteroidDrawPile,
      //   newAsteroidDiscardPile
      // );
      // drawNewItems(newItemsHand, newItemsDrawPile, newItemsDiscardPile);

      //setResources(calculateResources());
      //calculateExtraction();
      //asteroidTurn();
    }

    // if (newDrawPile.length === 0) {
    //   newDrawPile = [...newDiscardPile];
    //   newDiscardPile = [];
    // }

    setDrawPile(newDrawPile);
    setHand(newHand);
    setDiscardPile(newDiscardPile);
    // console.log(content);
    // console.log(pos);
    // setAsteroidDrawPile(newAsteroidDrawPile);
    // setAsteroidHand(newAsteroidHand);
    // setAsteroidDiscardPile(newAsteroidDiscardPile);
    setItemsDrawPile(newItemsDrawPile);
    setItemsHand(newItemsHand);
    setItemsDiscardPile(newItemsDiscardPile);
    //setResources(calculateResources());
    setExtraction(calculateExtraction());
    //setDescription("");
    //can you set description here? do we know where the mouse is?
    // setDescription(newHand[pos].description);

    //setDescription(props.pos);
    // function timeout(delay) {
    //   return new Promise((res) => setTimeout(res, delay));
    // }
    // await timeout(3000);

    // if (mana === 1) {
    //   asteroidTurn();
    //   setMana(totalMana);
    // }
    // setResources(resources - calculateResources());
  }

  function changeDescription(e) {
    if (e === undefined) {
      setDescription("nothing here");
      // console.log("nothing here");
    } else {
      setDescription(e.description);
      //console.log("object: ", e.description);
    }
  }

  return (
    <div className="App">
      <AvailableOreRow
        asteroidHand={asteroidHand}
        setDescription={setDescription}
        playCard={playCard}
        calculateExtraction={calculateExtraction}
      />
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
        {[...Array(5)].map((x, i) => (
          <CardBox
            key={i}
            content={itemsHand[i]}
            pos={i}
            resources={calculateResources()}
            setDescription={setDescription}
            playCard={playCard}
          />
        ))}
        {/* <CardBox
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
        /> */}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          <div>
            Resources: <b>{calculateResources()}</b>
            {totalResources} | Extraction: <b>{calculateExtraction()}</b>{" "}
          </div>
          <div>Sector: 123456 | Asteroid: {calculateExtraction()} </div>
          <div>
            Draw Pile: {drawPile.length} | Discard Pile: {discardPile.length}{" "}
          </div>
          <div>
            Functional Capacity: {life} | Deterioriating rate:{" "}
            {discardPile.length}{" "}
          </div>
        </div>
        <div
          style={{
            margin: "10px",
            padding: "10px"
          }}
        >
          <button
            style={{
              height: "100px",
              width: "100px"
            }}
            className="nextButton"
            onClick={nextTurn}
          >
            Next{" "}
          </button>
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <DebuggerBox title="Draw Pile" cards={drawPile} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <DebuggerBox title="Discard Pile" cards={discardPile} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <DebuggerBox title="I Draw Pile" cards={itemsDrawPile} />
        <DebuggerBox title="I Hand" cards={itemsHand} />
        <DebuggerBox title="I Discard Pile" cards={itemsDiscardPile} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <DebuggerBox title="O Draw Pile" cards={asteroidDrawPile} />
        <DebuggerBox title="O Hand" cards={asteroidHand} />
        <DebuggerBox title="O Discard Pile" cards={asteroidDiscardPile} />
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
      {/* <div
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
      </div> */}
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
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <DebuggerBox title="A Draw Pile" cards={asteroidDrawPile} />
        <DebuggerBox title="A Hand" cards={asteroidHand} />
        <DebuggerBox title="A Discard Pile" cards={asteroidDiscardPile} />
      </div> */}

      <div>
        <button className="startButton" onClick={drawNewHand}>
          Start game{" "}
        </button>
        <button className="playCardButton" onClick={playCard}>
          Play card{" "}
        </button>
      </div>
    </div>
  );
}
