"use client";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/data";
import { AlignJustify, MonitorPlay } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer lg:hidden block" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Link href="/">
            <SheetClose className="flex items-center gap-2 pb-10 pt-2">
              <MonitorPlay className="md:size-8 size-10" />
              <h2 className=" md:text-2xl text-3xl font-semibold">WilFix</h2>
            </SheetClose>
          </Link>
        </SheetHeader>

        <SheetDescription>
          {navLinks.map((link) => {
            const isActive = pathName.startsWith(link.path);
            return (
              <div key={link.label} className="flex flex-col gap-2">
                <Link
                  href={link.path}
                  className={`${
                    isActive
                      ? "text-primaryClr underline underline-offset-8 docoration-4"
                      : ""
                  } text-lg font-semibold py-4`}
                >
                  <SheetClose>{link.label}</SheetClose>
                </Link>
              </div>
            );
          })}
        </SheetDescription>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              variant={"default"}
              size={"lg"}
              className="rounded-full border-2 border-primaryClr text-md bg-primaryClr mt-5  text-lg inline-block hover:text-white "
            >
              Sign In
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
