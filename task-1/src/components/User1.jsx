import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { turnOnLight, turnOffLight, initializeState } from "../redux/slice";
import io from "socket.io-client";
import Bedroom from "./Bedroom";
import Kitchen from "./kitchen";
import AllOnOffBtn from "./AllOnOffBtn";

const User1 = () => {
  const dispatch = useDispatch();
  const lightsState = useSelector((state) => state.lights);

  useEffect(() => {
    const socket = io("http://localhost:4000");

    socket.on("initialState", (data) => {
      dispatch(initializeState(data));
    });

    socket.on("lightStateChange", (data) => {
      dispatch(initializeState(data));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  const handleTurnOnLight = (room, light) => {
    dispatch(turnOnLight({ room, light }));
    emitLightStateChange(room, light, true);
  };

  const handleTurnOffLight = (room, light) => {
    dispatch(turnOffLight({ room, light }));
    emitLightStateChange(room, light, false);
  };


  const emitLightStateChange = (room, light, state) => {
    const data = { room, light, state };
    io("http://localhost:4000").emit("updateLight", data);
  };

  return (
    <>
     
        <div className="card main-card my-3 p-2">
          <h2 className="text-center">User 1</h2>
          <div className="row gy-2">
            <div className="col-md-6 col-12">
              <div className="card">
              <Bedroom
                lightsState={lightsState.bedroom}
                handleTurnOnLight={handleTurnOnLight}
                handleTurnOffLight={handleTurnOffLight}
              />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card">
              <Kitchen
                lightsState={lightsState.kitchen}
                handleTurnOnLight={handleTurnOnLight}
                handleTurnOffLight={handleTurnOffLight}
              />
              </div>
            </div>
          </div>
          <AllOnOffBtn handleTurnOnLight={handleTurnOnLight} handleTurnOffLight={handleTurnOffLight}/>
        </div>
    </>
  );
};

export default User1;
