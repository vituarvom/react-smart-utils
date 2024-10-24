import React, { useEffect, useRef, useCallback } from 'react';

const UseHover: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  useEffect(() => {
    const node = ref.current; // Capture the current node
    if (node) {
      try {
        // Add event listeners
        node.addEventListener('mouseenter', handleMouseEnter);
        node.addEventListener('mouseleave', handleMouseLeave);
      } catch (error) {
        console.error('Error adding event listeners:', error);
      }

      // Cleanup event listeners on unmount
      return () => {
        try {
          node.removeEventListener('mouseenter', handleMouseEnter);
          node.removeEventListener('mouseleave', handleMouseLeave);
        } catch (error) {
          console.error('Error removing event listeners:', error);
        }
      };
    }
  }, [handleMouseEnter, handleMouseLeave]); // Dependencies

  return (
    <div
      ref={ref}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: isHovered ? 'lightblue' : 'lightgray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid blue',
        borderRadius: '10px',
        transition: 'background-color 0.3s',
      }}
    >
      <h2>{isHovered ? 'Hovered!' : 'Hover over me!'}</h2>
    </div>
  );
};

export default UseHover;
