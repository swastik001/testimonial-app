import React from 'react';
import './App.css';
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    id: 1,
    image: "https://pics.craiyon.com/2023-10-08/2629c613d0b645d7ada11ea75ae3fe2e.webp",
    name: "Ronald Richards",
    text: "We needed a payment gateway that could handle our diverse customer base. Swift Revel offers a wide range of payment options, making it easy for our clients to pay."
  },
  {
    id: 2,
    image: "https://pics.craiyon.com/2023-05-31/220e4c73f6674d46a84840ebde9f9bc8.webp",
    name: "Cody Fisher",
    text: "Since switching to Swift Revel, I finally have peace of mind regarding my business finances. With their secure platform, I trust my data's protection completely."
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_U649-DcXvXGhgVxp4FPKJ548qOKGfg4kdgITc6I3mjqC4GOOUXo9YznJ8YebiiKEfc&usqp=CAU",
    name: "Marvin McKinney",
    text: "Reliable banking solutions for your financial operations. Reliable banking solutions for your financial operations. Reliable banking solutions for your financial operations."
  },
  {
    id: 4,
    image: "https://pics.craiyon.com/2023-07-13/70f4c8db63f94f30b453aee048daee7b.webp",
    name: "Jane Doe",
    text: "Swift Revel has revolutionized the way we handle transactions. Their user-friendly interface and robust security features are unmatched."
  },
  {
    id: 5,
    image: "https://pics.craiyon.com/2023-10-13/1eefb686bfb245d3bfe5144ea5833cf2.webp",
    name: "John Smith",
    text: "Our experience with Swift Revel has been phenomenal. The flexibility and efficiency of their payment system have greatly benefited our business."
  }
];

function App() {
  return (
    <div className="App">
      <div className="testimonials">
        <h1>What User says</h1>
        <p>Testimonials that speak louder than words! Customer stories that light up our day.</p>
        <div className="slider">
          <div className="slider-track">
            {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
              <div className="testimonial-container" key={index}>
                <TestimonialCard
                  image={testimonial.image}
                  name={testimonial.name}
                  text={testimonial.text}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
