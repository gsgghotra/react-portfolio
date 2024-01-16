import { NavLink } from "react-router-dom";
const Hero = () => {
    return(
        // Hide the hero on small screen
        <section className="container-fluid primary-bg " id="hero">
            <div className="masthead">
                <div className="conatiner heroContainer">
                    <div className="row">
                        {/* Hide Huge text on extra small screens */}
                        <div className="col-lg-6 col-xl-7 secondary-color text-center d-none d-sm-block">
                            <div className="row d-flex justify-content-end">
                                <div className="col-lg-8 secondary-color text-center">
                                    <div className="back-circle">
                                        <div className="star star-top"></div>
                                        <div className="star star-bottom"></div>
                                    </div>
                                    <div className="heroText text-white position-relative">Hey There,<br/> I'm Gurjeet</div>
        
                                    {/* SubText  */}
                                    <div className="heroSubText text-center text-white">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-sm-10 col-lg-12 text-white ">
                                                <p>A dedicated web developer from London, driven by my passion for creating exceptional digital experiences. My skills encompass JavaScript, React, CSS, HTML, Node.js, git, and GitHub, allowing me to craft dynamic and engaging web solutions.</p>
                                            </div>
                                        </div>
                                    </div>
        
                                    {/* Buttons */}
                                    <NavLink to="contactme" end className="btn btn-basic btn-md m-1"> Contact me </NavLink>
                                    <NavLink to="work" end className="btn btn-secondary btn-md m-1"> Explore Projects </NavLink>
                                </div>
                            </div>
                        </div>
                        {/* Only show image on large screens */}
                        <div className="col-lg-6 col-xl-5 d-none d-lg-block">
                            <div className="container d-flex justify-content-center hero-profile position-relative">
                                {/* Image Container */}
                                <div className="imageBox">
                                    <div className="image"></div>
                                </div>
                                {/* Starts and information around image */}
                                <div className="star star-top position-absolute"></div>
                                <div className="star star-bottom position-absolute"></div>
                                <div className="text-container job position-absolute bg-black text-white d-flex justify-content-center align-items-center"><i className="fa-solid fa-laptop-code pe-2 fa-xs" style={{color: '#DE0206'}}></i>Web Developer</div>
                                <div className="text-container experience position-absolute bg-black text-white d-flex justify-content-center align-items-center"><i className="fa-regular fa-bookmark pe-2" style={{color: '#F3D1BF'}}></i> ReactJS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)}

export default Hero;