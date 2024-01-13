import { useState } from "react";

const Contact = () => {

    // Setting the component's initial state
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const [error, setError] = useState('');
    
    //On change
    const handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        setError('')

        // Updating the input's state
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    //on submit
    const handleFormSubmit = (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Validate email format using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.fullName || !formData.email) {
            setError('Fill out your Name and Email please!');
            return;
        } else if (!emailRegex.test(formData.email)) {
            setError('Invalid email address');
            return;
        } else if(!formData.message){ //If empty message
            setError('Please enter your message');
            return;
        }       
            //What if success
    
        setFormData({
            fullName: '',
            email: '',
            message: '',
        });
    };
    
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
                                    <h4 
                                        style={{color:'#28293E', margin:'15px 0px', position:'relative', top:'-10px'}}>
                                        Send me a message {formData.fullName}
                                    </h4>
                                    {error &&
                                        <div className="alert alert-danger" role="alert">
                                            {error}
                                        </div>
                                    }
                                    <div className="mb-3 col-lg-6">
                                        <input
                                        className="form-control"
                                        value={formData.fullName}
                                        name="fullName"
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Full Name"
                                        />
                                    </div>
                                    <div className="mb-3 col-lg-6">
                                        <input
                                            className="form-control"
                                            value={formData.email}
                                            name="email"
                                            onChange={handleInputChange}
                                            type="text"
                                            placeholder="Email"
                                            />
                                    </div>
                                    <div className="mb-3 col-lg-12">
                                        <textarea
                                            className="form-control"
                                            value={formData.message}
                                            name="message"
                                            onChange={handleInputChange}
                                            type="text"
                                            placeholder="Message"
                                            />
                                    </div>
                                    <button className="btn btn-primary col-lg-4" onClick={handleFormSubmit} style={{backgroundColor: '#28293E', outline:'none', border:'none', margin:'0px auto'}}>
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