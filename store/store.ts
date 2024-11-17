import { create } from "zustand";

interface User {
  restaurantName: string;
  restaurantType: string;
  companyAddress: string;
  location: { longitude: string; latitude: string };
  agentsList: Array<any>
  setLocation: (ln: string, lat: string) => void;
  setRestaurantName: (input: string) => void;
  setRestaurantType: (input: string) => void;
  setCompanyAddress: (input: string) => void;
  setAgentsList: (input: Array<string>) => void;
  workBenchCompanies: any[];
  setWorkBenchCompanies: (input: Array<any>) => void;
}

export const userInfoStore = create<User>((set) => ({
  companyAddress: "",
  restaurantName: "",
  restaurantType: "",
  location: {
    longitude: "",
    latitude: "",
  },
  setLocation: (ln: string, lat: string) =>
    set({ location: { longitude: ln, latitude: lat } }),
  setRestaurantName: (input: string) => set({ restaurantName: input }),
  setRestaurantType: (input: string) => set({ restaurantType: input }),
  setCompanyAddress: (input: string) => set({ companyAddress: input }),
  agentsList: [],
  setAgentsList: (input: Array<any>) =>
    set((state) => ({
      agentsList: [...state.agentsList, ...input],
    })),
  workBenchCompanies: [],
  setWorkBenchCompanies: (input: Array<any>) =>
    set((state) => ({
      workBenchCompanies: [...state.workBenchCompanies, ...input],
    })),
}));
