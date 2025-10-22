import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Spieler 1" symbol="X" />
          <Player initialName="Spieler 2" symbol="O" />
        </ol>
        SPIELFELD
      </div>
      LOG
    </main>
  );
}

export default App;
