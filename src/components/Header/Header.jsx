import logo from '../../assets/images/Logo.png'

const Header = () => {
    return(
    <>
        <header className="primary-bg">
            <div id="component" className="container-fluid py-1 d-flex justify-content-center">
                <a className="nav-link" aria-current="page" href="#">
                    <img src={logo} className="logo-image" alt="Text Logo of Gurjeet Singh" /></a>
            </div>

            <div className="d-flex justify-content-center">
                <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light">
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#aboutMe">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#work">Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contactMe">Contact Me</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    </>
)}

export default Header;