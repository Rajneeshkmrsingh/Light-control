import React from 'react'

function AllOnOffBtn({handleTurnOnLight,handleTurnOffLight}) {
    function handleAllOn(){
        handleTurnOnLight("kitchen","light1");
        handleTurnOnLight("kitchen","light2")
        handleTurnOnLight("bedroom","light1")
        handleTurnOnLight("bedroom","light2")
    };
    function handleAllOff(){
        handleTurnOffLight("kitchen","light1");
        handleTurnOffLight("kitchen","light2")
        handleTurnOffLight("bedroom","light1")
        handleTurnOffLight("bedroom","light2")
    };
  return (
    <div className='d-flex justify-content-center my-3'>
         <button className='btn btn-success mx-1' onClick={handleAllOn}>All On</button>
        <button  className='btn btn-success mx-1' onClick={handleAllOff}>All Off </button>
    </div>
  )
}
export default AllOnOffBtn;
