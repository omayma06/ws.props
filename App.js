import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './components/player'; // Fix import name to match the component name
import players from './players';
function App() {
  console.log(players);
  return (
    <div className="App">
      {players.map(player => {
        return <Player
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jersynumber={player.jersynumber}
          age={player.age} />



      })}
    </div>
  );
}

export default App;
