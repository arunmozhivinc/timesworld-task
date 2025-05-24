import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const images = [
  'https://via.placeholder.com/300x150?text=Slide+1',
  'https://via.placeholder.com/300x150?text=Slide+2',
  'https://via.placeholder.com/300x150?text=Slide+3',
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="text-center my-4">
      <img src={images[index]} alt={`Slide ${index + 1}`} className="img-fluid" />
      <div className="mt-2">
        <Button variant="outline-secondary" onClick={prev} className="me-2">←</Button>
        <Button variant="outline-secondary" onClick={next}>→</Button>
      </div>
      <div className="mt-2">
        {images.map((_, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              margin: '0 5px',
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: i === index ? '#333' : '#ccc',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
