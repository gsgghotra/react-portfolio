import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

    // Setting the component's initial state
    const form = useRef();

    const [error, setError] = useState('');
    

    //on submit
    const handleFormSubmit = (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Validate email format using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!form.current[0].value || !form.current[1].value) {
            setError('Fill out your Name and Email please!');
            return;
        } else if (!emailRegex.test(form.current[1].value)) {
            setError('Invalid email address');
            return;
        } else if(!form.current[2].value){ //If empty message
            setError('Please enter your message');
            return;
        }       
        //if success, send email
        try{
            emailjs.sendForm('service_ajq4xh7', 'template_gy58glu', form.current, 'VHnQQ5senYdwFBNrp')
            .then((result) => {
                console.log(result.text);
                form.current[0].value = ""
                form.current[1].value = ""
                form.current[2].value = ""
            }, (error) => {
                console.log(error.text);
            });
        }catch(error){
            console.log("Error sending email", error.message);
        }
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
                            <form className="form" ref={form} style={{width:'90%', margin: '0px auto'}}>
                                <div className="row w-100 text-center">
                                    <h4 
                                        style={{color:'#28293E', margin:'15px 0px', position:'relative', top:'-10px'}}>
                                        Send me a message
                                    </h4>
                                    {error &&
                                        <div className="alert alert-danger" role="alert">
                                            {error}
                                        </div>
                                    }
                                    <div className="mb-3 col-lg-6">
                                        <input
                                        className="form-control"
                                        name="user_name"
                                        type="text"
                                        placeholder="Full Name"
                                        />
                                    </div>
                                    <div className="mb-3 col-lg-6">
                                        <input
                                            className="form-control"
                                            name="user_email"
                                            type="text"
                                            placeholder="Email"
                                            />
                                    </div>
                                    <div className="mb-3 col-lg-12">
                                        <textarea
                                            className="form-control"
                                            name="message"
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