import './Credits.scss';

const Credits = ({ setInfo }) => {
    return (
        <div className="credits">
            <div className="credits_title">Credits</div>
            <p>I wrote this app as part of my coding portfolio, which can be found at <a href="https://github.com/BenHbrt">https://github.com/BenHbrt</a>.</p>
            <p>The inspiration for this project came simply from the time of year. I wanted to code something festive and seasonal, and as I like cooking latkes, I knew that Hanukkah was approaching, and so decided to code a dreidel game!</p>
            <p>I would like to thank flaticon.com (link), as I used one of their free icons for the dreidel favicon for this project. The icon and a link to where it can be found can both be found below.</p>
            <div className='credits_credits'>
                <img src={require('../Images/hebrew.png')} alt="Dreidel icon"></img>
                <a href="https://www.flaticon.com/free-icons/jewish" title="jewish icons">Jewish icons created by Freepik - Flaticon</a>
            </div>
            <div className="credits_button"onClick={() => setInfo(null)}><span>Close</span></div>
        </div>
    )
}
export default Credits;