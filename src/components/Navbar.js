import {useState} from 'react';
import {ReactComponent as SearchIcon} from '../images/search.svg'
import DemoLogo from '../images/logo.png'
import WindowWidth from '../hooks/WindowWidth'

function Navbar() {
    const {width} = WindowWidth();
    const max = 860;
    const [offSetY, setOffSetY] = useState(0);

    const fullBar = (
        <div className="navbar-container">
        <div className="nav-left">
            <div className="logo-container">
                <img className="logo" src={DemoLogo}></img>
            </div>
        </div>
        <div className="nav-right">
            <div className="link-container">
                <div className="font primary-nav-text">Careers</div>
                <div className="font primary-nav-text">Investors</div>
                <div className="font primary-nav-text">News</div>
                <div className="font primary-nav-text">Responsibility</div>
                <div className="font primary-nav-text">About</div>
            </div>
            <div className="search-container"><SearchIcon className="search"></SearchIcon></div>
        </div>
        {/* <div>Icons made by <a href="" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
    )

    const mobileBar = (
        <div className="navbar-container-sm">
        <div className="nav-left-sm">
            <div className="logo-container-sm">
                <img className="logo-sm" src={DemoLogo}></img>
            </div>
        </div>
        <div className="nav-right-sm">
            <div className="search-container"><SearchIcon className="search sm"></SearchIcon></div>
        </div>
        {/* <div>Icons made by <a href="" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
    )

  return (
    <>
    {width > 860 ?
    fullBar :
    mobileBar
    }
    </>
  );
}

export default Navbar;
