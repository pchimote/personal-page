import './intro.css';
import profile from './profile.jpg';

function Intro() {
    return (
        <div className="Intro">
            <div className="message">
                <div id="hi">Hi,</div>
                <div id="name">I am Pranav Chimote</div>
            </div>
            <div className="pic">
                <img src={profile} alt="profile" id="profile-pic" />
            </div>
        </div >
    );
}

export default Intro;