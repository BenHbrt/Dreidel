import './Pot.scss';

const Pot = ({ data }) => {

    return (
        <div className="pot">
            <div className="pot_name">Pot</div>
            <div className="player_geld">Geld: <span>{data}</span></div>
        </div>
    )
}
export default Pot;