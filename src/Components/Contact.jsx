import React, { useState } from 'react';
import './styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message Sent! \nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
