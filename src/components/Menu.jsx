import React from "react";
import useStore from "../store/store";

const Menu = () => {
  const { simSpeed, setSimSpeed } = useStore();

  const handleSpeedChange = e => {
    const newSpeed = e.target.value ? Number(e.target.value) : 0;
    setSimSpeed(newSpeed);
  };

  return (
    <div>
      <label htmlFor='simSpeed'>Simulation Speed: </label>
      <input id='simSpeed' type='number' min='0' max='400' step='0.1' value={simSpeed} onChange={handleSpeedChange} />
    </div>
  );
};

export default Menu;
