import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light">
            <div className="container-fluid d-flex justify-content-center">
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex align-items-center">
                        {/* Links */}
                    <li className="nav-item">
                        <NavLink to="/" end className="nav-link" > Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/work" className="nav-link" end> Work </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contactme" className="nav-link" end> Contact me </NavLink>
                    </li>
                    <li className="nav-item">
                        <a href="https://docs.google.com/document/d/1MX_XYa1h61EmjJqQFzjMovJFZ0BnMrnFWV4NuCzTV1Y/edit?usp=sharing" target="_blank" className="nav-link"> Resume </a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;