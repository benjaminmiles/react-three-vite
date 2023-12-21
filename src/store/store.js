import { create } from 'zustand';
import * as THREE from 'three';

const useStore = create((set, get) => ({
    simSpeed: .1,
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


    cameraTarget: new THREE.Vector3(0, 0, 0),
    setCameraTarget: (target) => set({ cameraTarget: target }),
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