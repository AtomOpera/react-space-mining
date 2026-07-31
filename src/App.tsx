// const handleMouseOver = (event) => {
//   console.log("On it!");
//   console.log(event.target.children[0].children[0].children[0]);
//   console.log(event.target.children[0].children[0].value);
// };
// onmouse over detecting the element
// https://linguinecode.com/post/get-current-element-react-onmouseover-or-onmouseenter

// life support system

//LIFE linear/limited/long-term/loss
// infrastructure function
// endurance /expectations
// Loss of Infraestructure Function Endurance
// Level of Infraestructure Functional Endurance
//HEALTH high life
//Hit Points

// energy available per cicle

// mana
// manufacturing actions now available
// manufacturing actions per Net Assets
// Manufacturing Actions in Network of Assets

import { useState } from "react";
// import './App.css'
import basicDeck from "./components/basicDeck";
import asteroidDeck from "./components/asteroidDeck";
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
  const [asteroidDrawPile, setAsteroidDrawPile] = useState(asteroidDeck);
  const [asteroidHand, setAsteroidHand] = useState([]);
  const [asteroidDiscardPile, setAsteroidDiscardPile] = useState([]);
  const [description, setDescription] = useState("");
  const [mana, setMana] = useState(3);
  const [ore, setOre] = useState(50);
  const [totalMana, setTotalMana] = useState(3);
  const [life, setLife] = useState(50);
  const [shield, setShield] = useState(0);
  const [history, setHistory] = useState([]);
  const [debugMess, setDebugMess] = useState('test');
  const [disabled, setDisabled] = useState(false);
  // useEffect(() => {
  //   const newShield = shield;
  //  }, [shield]);

  // https://upmostly.com/tutorials/simplifying-react-state-and-the-usestate-hook

  function drawCards() {}

  function start() {}

  // This cuold be a function
  const asteroidTurn = (newShield) => {
    
    // console.log("asteroidHand: ", asteroidHand);
    let damage=0;
    if (asteroidHand !== [] && asteroidHand.length !== 0) {
      damage = asteroidHand[0].actions[0].quantity;
      console.log("damage: ", damage);
      //this.newShield = 0;
      // let thisShield = shield;
      let totalDamage;
      let thisLife = 0;
      if (damage - newShield > 0) {
        totalDamage = damage - newShield;
        console.log("totalDamage: ", totalDamage);
        console.log("shield: ", newShield);
        thisLife = life - totalDamage;
        console.log("thisLife: ", thisLife);
        setLife(thisLife);
      }
    }
    let newAsteroidDrawPile = [...asteroidDrawPile];
    let newAsteroidHand = [...asteroidHand];
    let newAsteroidDiscardPile = [...asteroidDiscardPile];
    newAsteroidDrawPile.sort(() => 0.5 - Math.random());
    // console.log("ABRI new A hand: ", newAsteroidHand);
    // console.log("ABRI new A draw pile: ", newAsteroidDrawPile);
    // console.log("ABRI new A discard pile: ", newAsteroidDiscardPile);
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
    //setShield(0);
    newShield - damage >= 0 ? setShield (newShield - damage) : setShield (0) ;
  };

  async function playCard({ content, pos }) {
    let cardPlayed = content;
    let newMana = mana;
    let newShield = shield;
    if (content !== undefined && content.action === "attack") {
      setOre(ore - cardPlayed.quantity);
    }
    if (content !== undefined && content.action === "deffence") {
      newShield = shield + cardPlayed.quantity
      setShield(newShield);
    }
    if (content !== undefined && content.action === "mana") {
      // const totalmana = mana + cardPlayed.quantity;
      newMana = newMana + cardPlayed.quantity;
      // setMana(newMana);
      // console.log("setting mana: ", totalmana);
      // console.log("setting mana: ", mana);
      // console.log("setting mana: ", cardPlayed.quantity);
    }
    let newDrawPile = [...drawPile];
    let newHand = [...hand];
    let newDiscardPile = [...discardPile];
    newDrawPile.sort(() => 0.5 - Math.random());
    // console.log("ABRI new hand: ", newHand);
    // console.log("ABRI new draw pile: ", newDrawPile);
    // console.log("ABRI new discard pile: ", newDiscardPile);
    //alert(props.content.card);
    //alert(newHand.findIndex(x => x.id === props.content.id));
    //alert(newHand.includes(props.content.id));

    if (newHand != null && newHand.length != null && newHand.length > 0) {
      // newHand find the id
      //newDiscardPile.push(newHand[0]);
      const index = newHand.findIndex((x) => x.id === content.id);
      //newDiscardPile.push(newHand[0]);
      newDiscardPile.push(newHand[index]);
      //I need the index of the card to be removed down here:
      // a = [
      //   {prop1:"abc",prop2:"qwe"},
      //   {prop1:"bnmb",prop2:"yutu"},
      //   {prop1:"zxvz",prop2:"qwrq"}];

      // index = a.findIndex(x => x.prop2 ==="yutu");

      // console.log(index);
      newHand.splice(index, 1, newDrawPile[0]);
      //newHand.push(newDrawPile[0]);
      newDrawPile.splice(0, 1);
      newMana = newMana - 1;
      const newHistory = [...history];
      newHistory.push('Mana -1, ');
      newHistory.push(`Mana: ${newMana}, `);
      //setHistory(history.push('Mana -1'));
      // setMana(newMana);
      //setMana(mana - 1);
      setDebugMess (newMana);
      setHistory(newHistory);
      // console.log('history: ', history);
      // console.log('newHistory: ', newHistory);
      // } else {
      //   setMana(newMana);
      // }
    } else {
      newHand.push(newDrawPile[0]);
      newHand.push(newDrawPile[1]);
      newHand.push(newDrawPile[2]);
      newHand.push(newDrawPile[3]);
      newDrawPile.splice(0, 1);
      newDrawPile.splice(0, 1);
      newDrawPile.splice(0, 1);
      newDrawPile.splice(0, 1);
      asteroidTurn(newShield);
    }

    if (newDrawPile.length === 0) {
      newDrawPile = [...newDiscardPile];
      newDiscardPile = [];
    }

    setDrawPile(newDrawPile);
    setHand(newHand);
    setDiscardPile(newDiscardPile);
    // console.log(content);
    // console.log(pos);
    //setDescription("");
    //can you set description here? do we know where the mouse is?
    setDescription(newHand[pos].description);

    //setDescription(props.pos);
    function timeout(delay) {
      return new Promise((res) => setTimeout(res, delay));
    }
    
    //let tata = mana;

    // setDebugMess (`mana: ${mana}`);
    if (newMana === 0) {
      //let newTot = totalMana;
      //setMana(totalMana);
      newMana = totalMana;
      setDebugMess ('in!');
      setDisabled(true);
      setMana(0)
      //let newHistorys = history;
      //newHistorys.push(`Total mana: ${totalMana}, `);
      // setHistory(newHistorys);
      await timeout(3000);
      asteroidTurn(newShield);
      setDisabled(false);
    }
    setMana(newMana)

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      > {mana} { } {shield}
        <MessageBox history={history}/>
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
        <CardBox
          content={hand[0]}
          pos="0"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          disabled={disabled}
        />
        <CardBox
          content={hand[1]}
          pos="1"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          disabled={disabled}
        />
        <CardBox
          content={hand[2]}
          pos="2"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          disabled={disabled}
        />
        <CardBox
          content={hand[3]}
          pos="3"
          setDescription={setDescription}
          //changeDescription={changeDescription}
          playCard={playCard}
          disabled={disabled}
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <DebuggerBox title="Draw Pile" cards={drawPile} />
        <DebuggerBox title="Hand" cards={hand} />
        <DebuggerBox title="Discard Pile" cards={discardPile} />
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
