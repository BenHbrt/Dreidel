import './Player.scss';

const Player = ({ data, position, turn }) => {

    return (
        <div className={`player${position === turn ? " turn" : ""}`}>
            <div className="player_name">{data.name}</div>
            <div className="player_geld">Geld: <span>{data.geld}</span></div>
        </div>
    )
}
export default Player;