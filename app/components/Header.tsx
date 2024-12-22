import React from "react";
import { HeaderLink } from "./HeaderLink";
import Link from "next/link";
import Search from "./Search";

export const Header = () => {
  return (
    <div className="w-full p-4">
      <div className="max-w-4xl mx-auto flex gap-2 justify-between items-center">
        <Link href="/">Icon</Link>
        <Search />
        <div className="flex gap-x-2">
          <HeaderLink href="/" name="Home" />
          <HeaderLink href="/about" name="About" />
        </div>
      </div>
    </div>
  );
};
