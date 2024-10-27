import SearchDialog from "@/components/SearchDialog";
import { Button } from "@/components/ui/button";
import { MonitorPlay } from "lucide-react";

import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between lg:px-16 md:px-12 px-5 py-4 fixed w-full top-0 z-50 text-white backdrop-blur-[13px] backdrop-saturate-[180%] bg-[rgba(84,84,86,0.16)] border border-[rgba(255,255,255,0.125)]">
        <Link href="/" className="flex items-center gap-2">
          <MonitorPlay className="md:size-8 size-4" />
          <h2 className=" md:text-2xl text-xl font-semibold">WilFix</h2>
        </Link>

        <NavLinks />

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <SearchDialog />
          <Button
            variant={"outline"}
            size={"sm"}
            className="rounded-full border-2 border-primaryClr text-md bg-transparent hover:text-white md:block hidden"
          >
            Sign In
          </Button>
          <MobileNavbar />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
