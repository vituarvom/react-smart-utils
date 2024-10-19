import React from 'react';
import UseHover from '../../package/src/hooks/useHover/useHover.ts';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Hover Detection Example</h1>
      <UseHover />
    </div>
  );
};

export default App;
