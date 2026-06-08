import React, { useState, useEffect } from 'react';

export default function WindowResize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth < 800;
  
  const viewStyle = {
    color: isMobile ? 'blue' : 'green',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '10px'
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h2>Window Resize Tracker</h2>
      <p>Current Width: <strong>{windowWidth}px</strong></p>
      
      <div style={viewStyle}>
        {isMobile ? 'its Mobile view' : 'its Desktop view'}
      </div>
    </div>
  );
}