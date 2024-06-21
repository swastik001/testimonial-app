import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ image, name, text }) => {
    return (
        <div className="testimonial">
            <img src={image} alt={name} className="testimonial-img" />
            <h3 className="testimonial-name">{name}</h3>
            <p className="testimonial-text">{text}</p>
        </div>
    );
};

export default TestimonialCard;
