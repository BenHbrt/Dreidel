import './Pot.scss';

const Pot = ({ data, winner }) => {

    return (
        <div className={`pot ${winner ? "hidden" : ""}`}>
            <div className="pot_name">Pot</div>
            <div className="player_geld">Geld: <span>{data}</span></div>
        </div>
    )
}
export default Pot;