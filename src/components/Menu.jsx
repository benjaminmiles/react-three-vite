import React, { useState } from "react";
import useStore from "../store/store";

const Menu = () => {
  const { simSpeed, setSimSpeed } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSpeedChange = e => {
    const newSpeed = e.target.value ? Number(e.target.value) : 0;
    setSimSpeed(newSpeed);
  };

  return (
    <div className={`menu-con ${isOpen ? "open" : "close"}`}>
      <button onClick={toggleMenu} className='menu-toggle-btn'>
        menu
      </button>
      <div className='menu-content'>
        <div className='menu-item'>
          <label htmlFor='simSpeed'>Simulation Speed: </label>
          <input id='simSpeed' type='number' min='0' max='400' step='0.1' value={simSpeed} onChange={handleSpeedChange} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
