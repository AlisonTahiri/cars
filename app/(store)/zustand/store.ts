import { AppUser } from "@/sanity.types";
import { create } from "zustand";

type UserStore = {
  user: AppUser | null;
  setUser: (user: AppUser | null) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
