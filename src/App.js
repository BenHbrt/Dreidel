import './App.scss'

import Player from './Components/Player';
import Dreidel from './Components/Dreidel';

function App() {
  return (
    <div className="container">
      <div className="container_title">Dreidel</div>
      <div className="container_dreidel">
        <Dreidel />
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
