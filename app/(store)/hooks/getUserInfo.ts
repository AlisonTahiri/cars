import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { getUserByEmail } from "@/sanity/lib/users/getUserByEmail";
import { AppUser } from "@/sanity.types";
import { useUserStore } from "../zustand/store";

export const useUserInfo = () => {
  const { data: session, status } = useSession();
  const userInfo = useUserStore((state) => state.user);
  const setUserInfo = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (userInfo) return;
    if (session?.user?.email) {
      getUserByEmail<AppUser>(session.user.email).then((user) => {
        setUserInfo(user);
      });
    } else {
      setUserInfo(null);
    }
  }, [session, status, setUserInfo, userInfo]);

  return { userInfo, status, setUserInfo };
};
