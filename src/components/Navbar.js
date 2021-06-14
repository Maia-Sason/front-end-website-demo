import {ReactComponent as SearchIcon} from '../images/search.svg'
import DemoLogo from '../images/logo.png'

function Navbar() {
  return (
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
  );
}

export default Navbar;
