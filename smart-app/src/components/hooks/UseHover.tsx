import React, { useEffect, useRef } from 'react';

const UseHover: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    if (ref.current) {
      const node = ref.current;

      // Add event listeners
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup event listeners on unmount
      return () => {
        if (node) {
          node.removeEventListener('mouseenter', handleMouseEnter);
          node.removeEventListener('mouseleave', handleMouseLeave);
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
