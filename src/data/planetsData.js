import * as THREE from 'three';

const sunPosition = new THREE.Vector3(0, 0, 0);

const testData = {
    name: "Zeta",
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
    color: "red",
    gravity: 3.72076, // in m/s²
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

// Alternatively, export all as a single object
const planetsData = {
    test: testData,
    Mars: marsData,
    Earth: earthData,
    Mercury: mercuryData,
    Venus: venusData,
};
export default planetsData;
