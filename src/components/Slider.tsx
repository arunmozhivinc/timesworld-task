import React, { useState } from 'react';
import './slider.css'; // Custom CSS for styling

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample slides (you can replace with actual images)
  const slides = [
    {
      content: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="60" width="30" height="30" fill="#ccc" />
          <circle cx="75" cy="75" r="15" fill="#ccc" />
          <polygon points="50,10 75,50 25,50" fill="#ccc" />
        </svg>
      ),
    },
    {
      content: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="60" width="30" height="30" fill="#ccc" />
          <circle cx="75" cy="75" r="15" fill="#ccc" />
          <polygon points="50,10 75,50 25,50" fill="#ccc" />
        </svg>
      ),
    },
    {
      content: (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="60" width="30" height="30" fill="#ccc" />
          <circle cx="75" cy="75" r="15" fill="#ccc" />
          <polygon points="50,10 75,50 25,50" fill="#ccc" />
        </svg>
      ),
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container">
      {/* Slider Content */}
      <div className="slider">
        <button className="arrow left-arrow" onClick={handlePrev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="slide-content">{slides[currentSlide].content}</div>

        <button className="arrow right-arrow" onClick={handleNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;