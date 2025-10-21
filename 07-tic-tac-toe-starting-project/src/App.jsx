import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Spieler 1" symbol="X" />
          <Player name="Spieler 2" symbol="O" />
        </ol>
        SPIELFELD
      </div>
      LOG
    </main>
  );
}

export default App;
