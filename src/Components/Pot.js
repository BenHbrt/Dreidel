import './Pot.scss';

const Pot = () => {

    const geld = 2

    return (
        <div className="pot">
            <div className="pot_name">Pot</div>
            <div className="player_geld">Geld: <span>{geld}</span></div>
        </div>
    )
}
export default Pot;