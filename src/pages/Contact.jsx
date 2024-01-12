const Contact = () => {
    return(
        <section className="container-fluid" id="contactMe">
                <h2 className="w-auto p-3 fs-1 heading primary-color" >Contact Me</h2>
                <div className="row pt-3 d-flex justify-content-center">
                    {/* Contact me Card */}
                    <div className="col-lg-8 col-sm-10">
                        <div className="contact-card w-100 pt-3">
                            <div className="row w-100 text-center">
                                <div className="col-lg-4 contact-link">
                                    <i className="fa-regular fa-envelope fa-xl p-2" style={{color: '#000000'}}></i>
                                    <a  className="link-dark" href = "mailto: gsgghotra@gmail.com">gsgghotra@gmail.com</a>
                                </div>
            
                                <div className="col-lg-4 contact-link">
                                    <i className="fa-brands fa-linkedin fa-xl p-2" style={{color: '#000000'}}></i>
                                    <a  className="link-dark" href="https://www.linkedin.com/in/gsgghotra/" target="_blank">LinkedIn</a>
                                </div>
            
                                <div className="col-lg-4 contact-link">
                                    <i className="fa-brands fa-github fa-xl p-2" style={{color: '#000000'}}></i>
                                    <a className="link-dark" href="https://github.com/gsgghotra?tab=repositories" target="_blank">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="w-auto p-3 fs-1 heading primary-color" >Have a question?</h2>
                <div className="row pt-3 d-flex justify-content-center">
                    {/* Contact me Card */}
                    <div className="col-lg-8 col-sm-10">
                        <div className="contact-card w-100 pt-3">
                            {/* Form */}
                            <form className="form" style={{width:'90%', margin: '0px auto'}}>
                                <div className="row w-100 text-center">
                                    <div className="mb-3 col-lg-6">
                                        <input
                                        className="form-control"
                                        // value={formData.firstName}
                                        name="firstName"
                                        // onChange={handleInputChange}
                                        type="text"
                                        placeholder="First Name"
                                        />
                                    </div>
                                    <div className="mb-3 col-lg-6">
                                        <input
                                            className="form-control"
                                            // value={formData.firstName}
                                            name="email"
                                            // onChange={handleInputChange}
                                            type="text"
                                            placeholder="Email"
                                            />
                                    </div>
                                    <div className="mb-3 col-lg-12">
                                        <input
                                            className="form-control"
                                            // value={formData.firstName}
                                            name="message"
                                            // onChange={handleInputChange}
                                            type="text"
                                            placeholder="Message"
                                            />
                                    </div>
                                    <button className="btn btn-primary col-lg-12" style={{backgroundColor: '#28293E', outline:'none', border:'none'}}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
    )}
export default Contact;