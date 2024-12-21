import React from "react";
import { HeaderLink } from "./HeaderLink";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full p-4">
      <div className="max-w-4xl mx-auto flex justify-between ">
        <Link href="/">Icon</Link>
        <div className="flex gap-2">
          <HeaderLink href="/" name="Home" />
          <HeaderLink href="/about" name="About" />
        </div>
      </div>
    </div>
  );
};
