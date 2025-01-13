"use client";

import { Button } from "@/components/ui/button";
import { useUserInfo } from "../(store)/hooks/getUserInfo";
import { AppUser } from "@/sanity.types";
import { useState } from "react";
import { ThumbsUp } from "lucide-react";
type Props = {
  carId: string;
};

function LikeButton({ carId }: Props) {
  const { status, userInfo, setUserInfo } = useUserInfo();
  const [loadingFetch, setLoadingFetch] = useState(false);

  async function handleFavoriteCar(carId: string, isFavorite: boolean) {
    if (loadingFetch) return;
    setLoadingFetch(true);
    const res = await fetch(
      `/api/favorites/${carId}/${isFavorite ? "remove" : "add"}`,
      {
        method: "POST",
      }
    );

    if (res.ok) {
      const data = await res.json();
      const newUserInfo = {
        ...userInfo,
        favoriteCars: data.favoriteCars,
      } as AppUser;
      setUserInfo(newUserInfo);
    }

    setLoadingFetch(false);
  }

  if (status === "loading") return <div>Loading</div>;

  const isFavorite = !!userInfo?.favoriteCars?.some(
    (car) => car.carId === carId
  );

  return (
    <Button
      variant="outline"
      disabled={loadingFetch}
      onClick={() => handleFavoriteCar(carId, isFavorite)}
      className="w-24 h-12 text-4xl"
    >
      {/* {isFavorite ? "IS FAVORITE 👎" : "IS NOT FAVORITE👍"} */}
      {isFavorite ? <ThumbsUp fill="red" /> : <ThumbsUp />}
    </Button>
  );
}

export default LikeButton;
