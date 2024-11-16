import { create } from "zustand";

interface User {
  restaurantName: string;
  restaurantType: string;
  location: { longitude: string; latitude: string };
  setLocation: (ln: string, lat: string) => void;
  setRestaurantName: (input: string) => void;
  setRestaurantType: (input: string) => void;
}

export const userInfoStore = create<User>((set) => ({
  restaurantName: "",
  restaurantType: "",
  location: {
    longitude: "",
    latitude: "",
  },
  setLocation: (ln: string, lat: string) =>
    set({ location: { longitude: ln, latitude: lat } }),
  setRestaurantName: (input: string) => set({ restaurantName: input }),
  setRestaurantType: (input: string) => set({ restaurantType: input })
}));
