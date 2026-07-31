import { useState } from "react";
import type { Card, AsteroidCard } from "./types";
import basicDeck from "./components/basicDeck";
import asteroidDeck from "./components/asteroidDeck";
import DescriptionBox from "./components/DescriptionBox";
import MessageBox from "./components/MessageBox";
import DebuggerBox from "./components/DebuggerBox";
import CardBox from "./components/CardBox";
import AsteroidBox from "./components/AsteroidBox";

export default function App() {
  const [drawPile, setDrawPile] = useState<Card[]>(basicDeck);
  const [hand, setHand] = useState<Card[]>([]);
  const [discardPile, setDiscardPile] = useState<Card[]>([]);
  const [asteroidDrawPile, setAsteroidDrawPile] = useState<AsteroidCard[]>(asteroidDeck);
  const [asteroidHand, setAsteroidHand] = useState<AsteroidCard[]>([]);
  const [asteroidDiscardPile, setAsteroidDiscardPile] = useState<AsteroidCard[]>([]);
  const [description, setDescription] = useState("");
  const [mana, setMana] = useState(3);
  const [ore, setOre] = useState(50);
  const [life, setLife] = useState(50);
  const [shield, setShield] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);

  function drawCards() {}

  function start() {}

  const asteroidTurn = (newShield: number) => {
    let damage = 0;
    if (asteroidHand.length > 0 && asteroidHand[0]) {
      damage = asteroidHand[0].actions[0].quantity;
      let totalDamage: number;
      let thisLife: number;
      if (damage - newShield > 0) {
        totalDamage = damage - newShield;
        thisLife = life - totalDamage;
        setLife(thisLife);
      }
    }
    let newAsteroidDrawPile = [...asteroidDrawPile];
    let newAsteroidHand = [...asteroidHand];
    let newAsteroidDiscardPile = [...asteroidDiscardPile];
    newAsteroidDrawPile.sort(() => 0.5 - Math.random());
    if (newAsteroidHand[0] !== undefined)
      newAsteroidDiscardPile.push(newAsteroidHand[0]);
    setAsteroidDiscardPile(newAsteroidDiscardPile);
    newAsteroidHand.splice(0, 1);
    newAsteroidHand.push(newAsteroidDrawPile[0]);
    setAsteroidHand(newAsteroidHand);
    newAsteroidDrawPile.splice(0, 1);
    setAsteroidDrawPile(newAsteroidDrawPile);
    newShield - damage >= 0 ? setShield(newShield - damage) : setShield(0);
  };

  async function playCard({ content, pos }: { content?: Card; pos: string }) {
    if (!content) return;

    let cardPlayed = content;
    let newMana = mana;
    let newShield = shield;
    if (content.action === "attack") {
      setOre(ore - cardPlayed.quantity);
    }
    if (content.action === "deffence") {
      newShield = shield + cardPlayed.quantity;
      setShield(newShield);
    }
    if (content.action === "mana") {
      newMana = newMana + cardPlayed.quantity;
    }
    let newDrawPile = [...drawPile];
    let newHand = [...hand];
    let newDiscardPile = [...discardPile];
    newDrawPile.sort(() => 0.5 - Math.random());

    if (newHand.length > 0) {
      const index = newHand.findIndex((x) => x.id === content.id);
      newDiscardPile.push(newHand[index]);
      newHand.splice(index, 1, newDrawPile[0]);
      newDrawPile.splice(0, 1);
      newMana = newMana - 1;
      const newHistory = [...history];
      newHistory.push("Mana -1, ");
      newHistory.push(`Mana: ${newMana}, `);
      setHistory(newHistory);
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

    const posIndex = parseInt(pos, 10);
    if (newHand[posIndex]) {
      setDescription(newHand[posIndex].description);
    }

    function timeout(delay: number) {
      return new Promise((res) => setTimeout(res, delay));
    }

    if (newMana === 0) {
      newMana = 3;
      setDisabled(true);
      setMana(0);
      await timeout(3000);
      asteroidTurn(newShield);
      setDisabled(false);
    }
    setMana(newMana);
  }

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {mana} {shield}
        <MessageBox history={history} />
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
        <DescriptionBox description={description} />
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
          playCard={playCard}
          disabled={disabled}
        />
        <CardBox
          content={hand[1]}
          pos="1"
          setDescription={setDescription}
          playCard={playCard}
          disabled={disabled}
        />
        <CardBox
          content={hand[2]}
          pos="2"
          setDescription={setDescription}
          playCard={playCard}
          disabled={disabled}
        />
        <CardBox
          content={hand[3]}
          pos="3"
          setDescription={setDescription}
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
        <button className="playCardButton" onClick={() => playCard({ pos: "0" })}>
          Play card{" "}
        </button>
        <button className="nextButton" onClick={drawCards}>
          Next{" "}
        </button>
      </div>
    </div>
  );
}
