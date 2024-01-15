import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
const Form = () => {
    // Setting the component's initial state
    const form = useRef();
    const [displayMessage, setDisplayMessage] = useState('');
    const [alertType, setAlertType] = useState("alert alert-danger");
    
    //on submit
    const handleFormSubmit = (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        // Validate email format using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!form.current[0].value || !form.current[1].value) {
            setDisplayMessage('Fill out your Name and Email please!');
            return;
        } else if (!emailRegex.test(form.current[1].value)) {
            setDisplayMessage('Invalid email address');
            return;
        } else if(!form.current[2].value){ //If empty message
            setDisplayMessage('Please enter your message');
            return;
        }       
        //if success, send email
        try{
            emailjs.sendForm('service_ajq4xh7', 'template_gy58glu', form.current, 'VHnQQ5senYdwFBNrp')
            .then((result) => {
                setAlertType("alert alert-success");
                setDisplayMessage("Message sent successfully!")
                console.log(result.text);
                form.current[0].value = ""
                form.current[1].value = ""
                form.current[2].value = ""
            }, (error) => {
                setDisplayMessage("Error sending email!")
                console.log(error.text);
            });
        }catch(error){
            console.log("Error sending email", error.message);
        }
    };
    return (
        <>
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
                                {displayMessage &&
                                    <div className={alertType} role="alert">
                                        {displayMessage}
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
        </>
    )
}

export default Form;