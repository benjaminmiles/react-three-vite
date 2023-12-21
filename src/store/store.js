import { create } from 'zustand';
import * as THREE from 'three';

const useStore = create((set, get) => ({
    simSpeed: .1,
    setSimSpeed: (newSpeed) => set({ simSpeed: newSpeed }),

    sunSettings: {
        position: new THREE.Vector3(0, 0, 0),
    },

    // earthSettings: {
    //     radius: 10,
    //     speed: -0.5,
    //     angle: 0,
    //     position: new THREE.Vector3(10, 0, 0),
    // },
    setEarthOrbit: newSettings =>
        set(state => ({ earthSettings: { ...state.earthSettings, ...newSettings } })),
    earthPosition: new THREE.Vector3(10, 0, 0), // Initial position
    setEarthPosition: (position) => set({ earthPosition: position }),

    // moonSettings: {
    //     orbitRadius: 2,
    //     speed: -6,
    //     angle: 10,
    //     position: new THREE.Vector3(13, 0, 0)
    // },
    setMoonOrbit: newSettings =>
        set(state => ({ moonSettings: { ...state.moonSettings, ...newSettings } })),
}));

export default useStore;
