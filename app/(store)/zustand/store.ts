import { AppUser } from "@/sanity.types";
import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  setUser: (user: AppUser) => set({ user }),
}));
