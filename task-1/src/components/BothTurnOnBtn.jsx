import React from 'react'

export default function BothTurnOnBtn({handleTurnOn,handleTurnOff,label}) {
    function handleOn(){
        handleTurnOn(label, 'light2')
        handleTurnOn(label, 'light1')
    }
    function handleOff(){
        handleTurnOff(label, 'light2')
        handleTurnOff(label, 'light1')
    }
  return (
    <div>
        <div className='d-flex justify-content-center my-3'>
        <button className='btn btn-success mx-1' onClick={handleOn}>Both On</button>
        <button  className='btn btn-success mx-1' onClick={handleOff}>Both Off </button>
      </div>
    </div>
  )
}
