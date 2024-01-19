import logo from '../../assets/images/logosmall.png';
const Footer = () => {
    return (
        <footer className="container-fluid conatiner-footer" id="footer">
            <div className="row pt-3">
                <div className="d-flex justify-content-center col-lg-3 col-sm-12 pb-2">
                    <a className="nav-link" aria-current="page" href="#">
                        <img src={logo} style={{maxHeight: '40px'}} alt="Text Logo of Gurjeet Singh" />
                    </a>
                </div>
                <div className="d-flex justify-content-center col-lg-6 col-sm-12">
                    <a className="link-light p-2" href="https://github.com/gsgghotra" target="_blank"><i className=" fa-brands fa-github fa-2xl" style={{color: '#F3D1BF'}}></i></a>
                    <a className="link-light p-2" href="https://www.linkedin.com/in/gsgghotra" target="_blank"><i className=" fa-brands fa-linkedin fa-2xl" style={{color: '#F3D1BF'}}></i></a>
                </div>
                <div className="d-flex justify-content-center col-lg-3 col-sm-12">
                    <p className="p-2 text-white">&copy; 2023. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )}

export default Footer;