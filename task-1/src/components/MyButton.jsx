import React, { useEffect, useState } from 'react';

const MyButton = ({ label, isOn, handleTurnOn, handleTurnOff }) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(isOn);
  }, [isOn]);

  function handleChange(e) {
    const {checked} = e.target
    setStatus(checked);
    if (checked === true) {
      handleTurnOn();
    } else {
      handleTurnOff();
    }
  }

  return (
    <>
    <div className='d-flex'>
      
      <span className='pe-2'>{label}</span>
      <div className="form-check form-switch" >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={handleChange}
          checked={status}
        />
      </div>
    </div>
    </>
  );
};

export default MyButton;
