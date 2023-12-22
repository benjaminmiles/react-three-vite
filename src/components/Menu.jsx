import React, { useState } from "react";
import useStore, { usePlanetStore } from "../store/store";

const Menu = () => {
  const { simSpeed, setSimSpeed } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const { selectedPlanet } = usePlanetStore();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const formatNumber = number => {
    return new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(number);
  };

  const handleSpeedChange = e => {
    const speedOption = e.target.value;
    let newSpeed;

    switch (speedOption) {
      case "realtime":
        newSpeed = 1;
        break;
      case "1h":
        newSpeed = 3600; // 1 hour = 3600 seconds
        break;
      case "1d":
        newSpeed = 86400; // 1 day = 86400 seconds
        break;
      case "1w":
        newSpeed = 604800; // 1 week = 7 * 86400 seconds
        break;
      case "1m":
        newSpeed = 2629800; // Approx 1 month = 30.44 * 86400 seconds
        break;
      case "1y":
        newSpeed = 31557600; // 1 year = 365.25 * 86400 seconds (accounting for leap years)
        break;
      case "5y":
        newSpeed = 157788000; // 5 years
        break;
      case "10y":
        newSpeed = 315576000; // 10 years
        break;
      default:
        newSpeed = 1;
    }

    setSimSpeed(newSpeed);
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
            <select id='simSpeed' onChange={handleSpeedChange}>
              <option value='realtime'>Realtime</option>
              <option value='1h'>1s equals 1 hour</option>
              <option value='1d'>1s equals 1 day</option>
              <option value='1w'>1s equals 1 week</option>
              <option value='1m'>1s equals 1 month</option>
              <option value='1y'>1s equals 1 year</option>
              <option value='5y'>1s equals 5 years</option>
              <option value='10y'>1s equals 10 years</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
