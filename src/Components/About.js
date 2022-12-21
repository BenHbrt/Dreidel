import './About.scss';

const About = ({ setInfo }) => {
    return (
        <div className="about">
            <div className="about_title">About Dreidel</div>
            <div className="about_text">Dreidel is a game tradionally played during the Jewish festival of Hanukkah. The game is played using a four-sided spinning top (a dreidel) and pieces of 'money', known as geld. Wikipedia has some articles which explain the festival of Hanukkah and dreidels, link to which can be found below:</div>
            <div className="about_link">Hanukkah: <a href="https://en.wikipedia.org/wiki/Hanukkah">Link</a></div>
            <div className="about_link">Dreidels, and how to play the game: <a href="https://en.wikipedia.org/wiki/Dreidel">Link</a></div>
            <div className="about_button"onClick={() => setInfo(null)}><span>Close</span></div>
        </div>
    )
}
export default About;