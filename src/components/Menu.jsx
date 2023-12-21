import React, { useState } from "react";
import useStore, { usePlanetStore } from "../store/store";

const Menu = () => {
  const { simSpeed, setSimSpeed } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const { selectedPlanet } = usePlanetStore();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSpeedChange = e => {
    const newSpeed = e.target.value ? Number(e.target.value) : 0;
    setSimSpeed(newSpeed);
  };

  const formatNumber = number => {
    return new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(number);
  };

  return (
    <div className={`menu-con ${isOpen ? "open" : "close"}`}>
      <button onClick={toggleMenu} className='menu-toggle-btn'>
        Menu
      </button>
      <div className='menu-content'>
        {selectedPlanet ? (
          <div className='planet-details'>
            <h2>{selectedPlanet.name}</h2>
            <p>Mass: {formatNumber(selectedPlanet.mass)} kg</p>
            <p>Radius: {selectedPlanet.radius} km</p>
            <p>Orbital Radius: {formatNumber(selectedPlanet.orbitalRadius)} km</p>
            <p>Orbital Speed: {selectedPlanet.orbitalSpeed} km/s</p>
            <p>Orbital Period: {selectedPlanet.orbitalPeriod} days</p>
            <p>Orbital Inclination: {selectedPlanet.orbitalInclination} degrees</p>
            <p>Axial Tilt: {selectedPlanet.axialTilt} degrees</p>
            <p>Rotation Period: {selectedPlanet.rotationPeriod} hours</p>
            <p>Surface Temperature: {selectedPlanet.surfaceTemp} °C</p>
            <p>Gravity: {selectedPlanet.gravity} m/s²</p>
          </div>
        ) : (
          <div className='menu-item'>
            <label htmlFor='simSpeed'>Simulation Speed: </label>
            <input id='simSpeed' type='number' min='0' max='400' step='0.1' value={simSpeed} onChange={handleSpeedChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
