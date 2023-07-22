import React from 'react';
import MyButton from './MyButton';
import BothTurnOnBtn from './BothTurnOnBtn';

const Bedroom = ({ lightsState, handleTurnOnLight, handleTurnOffLight }) => {
  return (
    <div>
      <h4 className='text-center'>Bedroom</h4>
      <div className='d-flex flex-column justify-content-center align-items-center'>
      <MyButton
        label="Light 1"
        isOn={lightsState.light1}
        handleTurnOn={() => handleTurnOnLight('bedroom', 'light1')}
        handleTurnOff={() => handleTurnOffLight('bedroom', 'light1')}
      />
      <MyButton
        label="Light 2"
        isOn={lightsState.light2}
        handleTurnOn={() => handleTurnOnLight('bedroom', 'light2')}
        handleTurnOff={() => handleTurnOffLight('bedroom', 'light2')}
      />
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center'>
          <BothTurnOnBtn handleTurnOn={handleTurnOnLight} handleTurnOff={handleTurnOffLight} label="bedroom" />
    </div>
    </div>
  );
};

export default Bedroom;
