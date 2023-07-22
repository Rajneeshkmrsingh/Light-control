import React from 'react';
import MyButton from './MyButton';
import BothTurnOnBtn from './BothTurnOnBtn';

const Kitchen = ({ lightsState, handleTurnOnLight, handleTurnOffLight }) => {
  return (
    <div>
      <h4 className='text-center'>Kitchen</h4>
      <div className='d-flex flex-column justify-content-center align-items-center'>
      <MyButton
        label="Light 1"
        isOn={lightsState.light1}
        handleTurnOn={() => handleTurnOnLight('kitchen', 'light1')}
        handleTurnOff={() => handleTurnOffLight('kitchen', 'light1')}
      />
      <MyButton
        label="Light 2"
        isOn={lightsState.light2}
        handleTurnOn={() => handleTurnOnLight('kitchen', 'light2')}
        handleTurnOff={() => handleTurnOffLight('handleTurnOffLight', 'light2')}
      />
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center'>
    <BothTurnOnBtn handleTurnOn={handleTurnOnLight} handleTurnOff={handleTurnOffLight} label="kitchen" />
    </div>
    </div>
  );
};

export default Kitchen;
