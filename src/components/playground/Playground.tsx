import React from 'react';

const Playground = () => {
  return (
    <div>
      <div>
        <h2>Controls</h2>
        <h4>
          Use the arrow buttons to change the direction of the hoover (1 click = 90°
          rotation)
        </h4>
        <h4>Use the MOVE button to move the hoover</h4>
        <h4>
          If you want to change the playground configuration, use the RESET PLAYGROUND
          button
        </h4>
      </div>
      <div className="grid"></div>
    </div>
  );
};

export default Playground;
