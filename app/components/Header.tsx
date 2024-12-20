import React from "react";
import { HeaderLink } from "./HeaderLink";

export const Header = () => {
  return (
    <div className="flex justify-between w-full p-4">
      <div>Icon</div>
      <div className="flex gap-2">
        <HeaderLink href="/" name="Home" />
        <HeaderLink href="/about" name="About" />
      </div>
    </div>
  );
};
