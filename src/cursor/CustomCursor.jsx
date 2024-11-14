import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  // Create a ref for the cursor element
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        // Position the custom cursor based on mouse position
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    
    // Add the event listener for mouse move
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-100 ease-out"
      style={{
        position: 'fixed',
        borderRadius: '50%',
        width: '6px',
        height: '6px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        background:
          'radial-gradient(circle at 50% 50%, transparent 50%, #4b7bec 50%)',
      }}
    ></div>
  );
};

export default CustomCursor;

