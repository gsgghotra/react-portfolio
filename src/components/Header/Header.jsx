import logo from '../../assets/images/Logo.png';
import Nav from '../Nav/Nav';

const Header = () => {
    return(
        <header className="primary-bg">
            <div id="component" className="container-fluid py-1 d-flex justify-content-center">
                <a className="nav-link" aria-current="page" href="#">
                    <img src={logo} className="logo-image" alt="Text Logo of Gurjeet Singh" /></a>
            </div>
            <div className="d-flex justify-content-center">
                <Nav />
            </div>
        </header>
)}

export default Header;