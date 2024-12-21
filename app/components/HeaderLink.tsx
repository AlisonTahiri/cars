"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  href: string;
};

export const HeaderLink = ({ href, name }: Props) => {
  const pathname = usePathname();
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");

  return (
    <Link
      className={
        "inline-block no-underline" + (isActive ? "bolder underline" : "")
      }
      href={href}
    >
      {name}
    </Link>
  );
};
