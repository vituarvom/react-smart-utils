import React from 'react';
import useHover from '../../package/src/hooks/useHover/useHover';

const App: React.FC = () => {
  const [isHovered, hoverRef] = useHover<HTMLDivElement>(); // Using the hook

  return (
    <div style={{ padding: '20px' }}>
      <h1>Hover Detection Example</h1>
      <div
        ref={hoverRef}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: isHovered ? 'green' : 'red',
          transition: 'background-color 0.3s ease',
        }}
      />
      <p>{isHovered ? 'Hovering!' : 'Not hovering'}</p>
    </div>
  );
};

export default App;
