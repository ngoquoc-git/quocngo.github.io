import '../Assets/Navbar.css';
import {LogoGithub, LogoInstagram, LogoLinkedin, ReorderThreeOutline } from 'react-ionicons';
import logo from '../Assets/Quoc-navy-logo.PNG';

const Navbar = () => {
    return(
        <div className="Nav-body">
            <div className="flex-child" id="flex-1">
                <div className="flex-child-1" id="flex-11">
                    <img src={logo} alt="logo" className="logo"></img>
                    <div className="flex-child-11">
                        QUOC TRUONG NGO
                    </div>
                </div>  
            </div>
            <div className="flex-child" id="flex-2">
                <div className="flex-child-21">
                    Profile
                </div>
                <div className="flex-child-21">
                    Resume
                </div>
                <div className="flex-child-21">
                    Portfolio
                </div>
                <div className="flex-child-21">
                    Feedback
                </div>
            </div>
            <div className="flex-child" id="flex-3">
                <div className="flex-child-2" id="flex-21">
                    <LogoLinkedin/>
                </div>
                <div className="flex-child-2" id="flex-22">
                    <LogoGithub/>
                </div>
                <div className="flex-child-2" id="flex-23">
                    <LogoInstagram/>
                </div>
                <div className="flex-child-2" id="flex-24">
                    <ReorderThreeOutline/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

