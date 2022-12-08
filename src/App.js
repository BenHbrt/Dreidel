import './App.scss'

import Player from './Components/Player';
import Dreidel from './Components/Dreidel';
import Pot from './Components/Pot';
import Messages from './Components/Messages';

function App() {
  return (
    <div className="container">
      <div className="container_title">Dreidel</div>
      <div className="container_playarea">
        <Messages />
        <Dreidel />
        <Pot />
      </div>
      <div className="container_players">
        <Player />
        <Player />
        <Player />
        <Player />
        <Player />
      </div>
    </div>
  );
}

export default App;
