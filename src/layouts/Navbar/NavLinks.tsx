"use client";

import { navLinks } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathName = usePathname();

  return (
    <>
      <menu className="lg:block hidden ">
        {navLinks.map((link) => {
          const isActive = pathName.startsWith(link.path);

          return (
            <Link
              href={link.path}
              key={link.path}
              className={`${
                isActive
                  ? "text-primaryClr underline underline-offset-8 docoration-4"
                  : ""
              } inline-block px-6 uppercase text-base font-semibold`}
            >
              {link.label}
            </Link>
          );
        })}
      </menu>
    </>
  );
};

export default NavLinks;
