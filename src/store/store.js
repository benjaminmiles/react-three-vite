// store.js
import { create } from 'zustand';

const useStore = create(set => ({
    earthOrbitSettings: {
        radius: 10,
        speed: -0.01,
        angle: 0,
    },
    setEarthOrbitSettings: newSettings =>
        set(state => ({ earthOrbitSettings: { ...state.earthOrbitSettings, ...newSettings } })),

    moonOrbitSettings: {
        radius: 2,
        speed: -0.2,
        angle: 0,
    },
    setMoonOrbitSettings: newSettings =>
        set(state => ({ moonOrbitSettings: { ...state.moonOrbitSettings, ...newSettings } })),
}));

export default useStore;
