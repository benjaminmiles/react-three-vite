import * as THREE from 'three';

const sunPosition = new THREE.Vector3(0, 0, 0);

const sunData = {
    name: "Sun",
    mass: 1.989e30, // in kilograms
    radius: 696340, // in kilometers
    orbitalOrigin: sunPosition, // Sun as the central point
    orbitalRadius: 0, // Sun doesn't orbit around anything in the solar system
    orbitalSpeed: 0, // No orbital speed
    orbitalPeriod: 0, // No orbital period
    axialTilt: 7.25, // in degrees to the ecliptic plane
    rotationPeriod: 609.12, // in hours (varies by latitude)
    surfaceTemp: 5505, // in Celsius (average effective temperature)
    color: "#FFFF00", // Bright yellow color
    gravity: 274, // in m/s² (surface gravity)
};

const marsData = {
    name: "Mars",
    mass: 6.4171e23, // in kilograms
    radius: 3396.2, // in kilometers
    orbitalOrigin: sunPosition,
    orbitalRadius: 227.9e6, // in kilometers
    orbitalSpeed: 24.077, // in kilometers per second
    orbitalPeriod: 687, // in Earth days
    orbitalInclination: 1.85, // in degrees
    axialTilt: 25.19, // in degrees
    rotationPeriod: 24.6635, // in hours
    surfaceTemp: -63, // in Celsius
    color: "#B7410E",
    gravity: 3.72076, // in m/s²
};

// Similar data objects for other planets...
const earthData = {
    name: "Earth",
    mass: 5.972e24, // in kilograms
    radius: 6371, // in kilometers
    orbitalOrigin: sunPosition,
    orbitalRadius: 149.6e6, // in kilometers
    orbitalSpeed: 29.78, // in kilometers per second
    orbitalPeriod: 365.25, // in Earth days
    orbitalInclination: 0.00005, // in degrees
    axialTilt: 23.44, // in degrees
    rotationPeriod: 23.93, // in hours
    surfaceTemp: 14, // in Celsius
    color: "dodgerblue",
    gravity: 9.807 // in m/s²
};

const moonData = {
    name: "Moon",
    mass: 7.342e22, // in kilograms
    radius: 1737.4, // in kilometers
    orbitalOrigin: new THREE.Vector3(13, 0, 0), // Assuming Earth's position is stored in earthData
    orbitalRadius: 384400, // in kilometers (average distance to Earth)
    orbitalSpeed: 1.022, // in kilometers per second
    orbitalPeriod: 27.3, // in Earth days (sidereal period)
    orbitalInclination: 5.14, // in degrees (to the ecliptic)
    axialTilt: 1.54, // in degrees
    rotationPeriod: 655.7, // in hours (same as its orbital period, hence the same side always faces Earth)
    surfaceTemp: -53, // in Celsius (average)
    color: "#808080",
    gravity: 1.62, // in m/s²
};


const mercuryData = {
    name: "Mercury",
    mass: 3.285e23, // in kilograms
    radius: 2439.7, // in kilometers
    orbitalOrigin: sunPosition,
    orbitalRadius: 57.9e6, // in kilometers
    orbitalSpeed: 47.87, // in kilometers per second
    orbitalPeriod: 88, // in Earth days
    orbitalInclination: 7, // in degrees
    axialTilt: 0.034, // in degrees (very small)
    rotationPeriod: 1407.6, // in hours
    surfaceTemp: 167, // in Celsius (average day)
    color: "gray",
    gravity: 3.7 // in m/s²
};

const venusData = {
    name: "Venus",
    mass: 4.867e24, // in kilograms
    radius: 6051.8, // in kilometers
    orbitalOrigin: sunPosition,
    orbitalRadius: 108.2e6, // in kilometers
    orbitalSpeed: 35.02, // in kilometers per second
    orbitalPeriod: 225, // in Earth days
    orbitalInclination: 3.39, // in degrees
    axialTilt: 177.4, // in degrees (rotates in opposite direction)
    rotationPeriod: 5832.5, // in hours (retrograde rotation)
    surfaceTemp: 464, // in Celsius
    color: "white",
    gravity: 8.87 // in m/s²
};

const jupiterData = {
    name: "Jupiter",
    mass: 1.898e27, // in kilograms
    radius: 69911, // in kilometers
    orbitalOrigin: sunPosition, // Assuming Sun's position is at the origin
    orbitalRadius: 778.5e6, // in kilometers
    orbitalSpeed: 13.07, // in kilometers per second
    orbitalPeriod: 4333, // in Earth days
    orbitalInclination: 1.31, // in degrees
    axialTilt: 3.13, // in degrees
    rotationPeriod: 9.93, // in hours
    surfaceTemp: -145, // in Celsius (average)
    color: "#FFD27D",
    gravity: 24.79, // in m/s²
};

const saturnData = {
    name: "Saturn",
    mass: 5.683e26, // in kilograms
    radius: 58232, // in kilometers
    orbitalOrigin: sunPosition,
    orbitalRadius: 1.434e9, // in kilometers
    orbitalSpeed: 9.68, // in kilometers per second
    orbitalPeriod: 10759, // in Earth days
    orbitalInclination: 2.49, // in degrees
    axialTilt: 26.73, // in degrees
    rotationPeriod: 10.8, // in hours
    surfaceTemp: -139, // in Celsius (average)
    color: "#FFCC99",
    gravity: 10.44, // in m/s²
};

const neptuneData = {
    name: "Neptune",
    mass: 1.024e26, // in kilograms
    radius: 24622, // in kilometers
    orbitalOrigin: sunPosition,
    orbitalRadius: 4.495e9, // in kilometers
    orbitalSpeed: 5.43, // in kilometers per second
    orbitalPeriod: 60182, // in Earth days
    orbitalInclination: 1.77, // in degrees
    axialTilt: 28.32, // in degrees
    rotationPeriod: 16, // in hours
    surfaceTemp: -201, // in Celsius (average)
    color: "#4973AB",
    gravity: 11.15, // in m/s²
};

const uranusData = {
    name: "Uranus",
    mass: 8.681e25, // in kilograms
    radius: 25362, // in kilometers
    orbitalOrigin: sunPosition, // Assuming Sun's position is at the origin
    orbitalRadius: 2.871e9, // in kilometers
    orbitalSpeed: 6.81, // in kilometers per second
    orbitalPeriod: 30660, // in Earth days
    orbitalInclination: 0.77, // in degrees
    axialTilt: 97.77, // in degrees (unique side-rolling rotation)
    rotationPeriod: 17.2, // in hours
    surfaceTemp: -195, // in Celsius (average)
    color: "#AECBC9",
    gravity: 8.69, // in m/s²
};

const plutoData = {
    name: "Pluto",
    mass: 1.309e22, // in kilograms
    radius: 1188.3, // in kilometers
    orbitalOrigin: sunPosition, // Assuming Sun's position is at the origin
    orbitalRadius: 5.906e9, // in kilometers
    orbitalSpeed: 4.74, // in kilometers per second
    orbitalPeriod: 90560, // in Earth days
    orbitalInclination: 17.16, // in degrees
    axialTilt: 122.53, // in degrees
    rotationPeriod: 153.3, // in hours
    surfaceTemp: -229, // in Celsius (average)
    color: "#F4E8C8",
    gravity: 0.62, // in m/s²
};


const planetsData = {
    Sun: sunData,
    Mercury: mercuryData,
    Venus: venusData,
    Earth: earthData,
    Moon: moonData,
    Mars: marsData,
    Jupiter: jupiterData,
    Saturn: saturnData,
    Neptune: neptuneData,
    Uranus: uranusData,
    Pluto: plutoData,
};
export default planetsData;
