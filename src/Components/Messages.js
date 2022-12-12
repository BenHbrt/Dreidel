import './Messages.scss';

const Messages = ({ message1, message2, message3, message4 }) => {
    return (
        <div className="messages">
            <div className={`${message1 === "NONE" ? "hidden" : ""}`}>{message1}</div>
            <div className={`${message2 === "NONE" ? "hidden" : ""}`}>{message2}</div>
            <div className={`${message3 === "NONE" ? "hidden" : ""}`}>{message3}</div>
            <div className={`${message4 === "NONE" ? "hidden" : ""}`}>{message4}</div>
        </div>
    )
}
export default Messages;