import { create } from "zustand";

export const userInfoStore = create((set) => ({
  restaurantName: "",
  restaurantType: "",
  location: {
    longitude: "",
    latitude: "",
  },
  setLocation: (ln: string, lat: string) =>
    set({ longitude: ln, latitude: lat }),
}));
