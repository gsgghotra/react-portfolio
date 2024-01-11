import React, { useState } from 'react';

function ContactForm() {
    // Setting the component's initial state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleFormSubmit = (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!formData.firstName || !formData.lastName) {
        alert('Fill out your first and last name please!');
        } else {
        alert(`Hello ${formData.firstName} ${formData.lastName}`);
        }

        setFormData({
            firstName: '',
            lastName: '',
            subject: '',
            message: '',
        });
    };

  // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
    <div>
        <p>
            Hello {formData.firstName} {formData.lastName}
        </p>
        <form className="form">
            <input
            className="form-control"
            value={formData.firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
            />
            <input
            className="form-control"
            value={formData.lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
            />
            <input
            className="form-control"
            value={formData.subject}
            name="sunject"
            onChange={handleInputChange}
            type="text"
            placeholder="Subject"
            />
            <input
            className="form-control"
            value={formData.message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
            />
            <button onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
        </form>
    </div>
    );
}

export default ContactForm;
