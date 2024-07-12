import {create} from 'zustand';

interface LocationStore {
  selectedLocations: string[];
  setSelectedLocations: (locations: string[]) => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
  selectedLocations: [],
  setSelectedLocations: (locations) => set({ selectedLocations: locations }),
}));
