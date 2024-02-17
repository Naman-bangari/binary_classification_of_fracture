import React, { useState } from 'react';
import img1 from '../components/pic/fb1.jpg';
import FractureDetector from './FractureDetector';
import Page1 from './page1';

const About = () => {
  const [fractureResult, setFractureResult] = useState(null);

  const handleResultChange = (result) => {
    setFractureResult(result);
    console.log(result);
  };

  return (
    <>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50vh', 
        transition: 'background-color 2s ease-in-out', 
        backgroundColor: fractureResult !== null ? (fractureResult > 0.501 ? 'red' : 'green') : 'yellow' }}>
        <FractureDetector onResultChange={handleResultChange} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
          <img
            src={img1}
            alt="Fractured Bone"
            style={{
              animation: 'moveImage 2s infinite alternate', 
              maxWidth: '100%',
              cursor: 'pointer',  
            }}
            onClick={() => {
              window.scrollTo({
                top: 800,  
                behavior: 'smooth',  
              });
            }}
          />
        </div>
      </div>
      <style>
        {`
          @keyframes moveImage {
            from {
              transform: translateX(0); // Start position
            }
            to {
              transform: translateX(20px); // End position (adjust as needed)
            }
          }
        `}
      </style>
      <Page1 />
    </>
  );
};

export default About;
