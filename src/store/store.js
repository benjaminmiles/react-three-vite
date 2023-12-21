import { create } from 'zustand';
import * as THREE from 'three';

const useStore = create((set, get) => ({
    simSpeed: .2,
    setSimSpeed: (newSpeed) => set({ simSpeed: newSpeed }),

    sunSettings: {
        position: new THREE.Vector3(0, 0, 0),
    },

    setEarthOrbit: newSettings =>
        set(state => ({ earthSettings: { ...state.earthSettings, ...newSettings } })),
    earthPosition: new THREE.Vector3(10, 0, 0), // Initial position
    setEarthPosition: (position) => set({ earthPosition: position }),

    setMoonOrbit: newSettings =>
        set(state => ({ moonSettings: { ...state.moonSettings, ...newSettings } })),


    // cameraTarget: new THREE.Vector3(0, 0, 0),

    camera: new THREE.PerspectiveCamera(),
    orbitControls: null,
    previousCameraPosition: new THREE.Vector3(),
    previousCameraTarget: new THREE.Vector3(),
    setOrbitControls: (controls) => set({ orbitControls: controls }),

    setCameraTarget: (position) => {
        const { orbitControls } = get();
        if (orbitControls) {
            orbitControls.target.copy(position);
            orbitControls.update();
        }
    },

    resetCamera: () => {
        const { orbitControls } = get();
        if (orbitControls) {
            orbitControls.target.set(0, 0, 0); // Assuming the sun is at the origin
            orbitControls.update();
        }
    },
}));

export default useStore;


const usePlanetStore = create((set) => ({
    planetPositions: {},
    updatePlanetPosition: (name, position) =>
        set((state) => ({
            planetPositions: { ...state.planetPositions, [name]: position },
        })),


    planetAngles: {},
    updatePlanetAngle: (name, angle) =>
        set((state) => ({
            planetAngles: { ...state.planetAngles, [name]: angle },
        })),

    selectedPlanet: null,
    setSelectedPlanet: (planetData) =>
        set(() => ({
            selectedPlanet: planetData,
        })),

}));

export { usePlanetStore }