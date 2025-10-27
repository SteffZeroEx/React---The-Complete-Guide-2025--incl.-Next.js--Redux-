import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  const  [activePlayer, setActivePlayer] = useState("X")

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Spieler 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Spieler 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      <p id="log">LOG - Coming Soon...</p>
    </main>
  );
}

export default App;
