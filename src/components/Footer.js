import DemoLogo from '../images/logo.png'
import github from '../images/github.svg'

function Footer({content, logo}) {
    return (
        <div className="footer-container">
            <div className="footer-left">
                <div className="footer-logo">
                    <img className="footer-logo-item" src={DemoLogo}></img>
                </div>
                <div className="font footer-left-text">Find Maia Sason on GitHub:</div>
    <div className="footer-right-icons">
        <a href="https://github.com/maia-sason"><img className="github" src={github}></img></a></div>
            </div>
            <div className="footer-right">
                <div className="footer-links">
                    <p className="font small-header">LINKS</p>
                    <a href="https://www.flaticon.com/authors/dave-gandy">GitHub icon made by Dave Gandy </a>
                    <a href="https://www.flaticon.com/">Search icon made by Those Icons</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;