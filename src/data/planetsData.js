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
    color: "red",
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

// Alternatively, export all as a single object
const planetsData = {
    Mars: marsData,
    Earth: earthData,
    test: testData,
};
export default planetsData;
