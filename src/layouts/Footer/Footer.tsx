import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Facebook, MonitorPlay } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="px-4 divide-y dark:bg-transparent dark:text-white ">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <Link href="/" className="flex items-center gap-2">
              <MonitorPlay className="md:size-8 size-4" />
              <h2 className=" md:text-2xl text-xl font-semibold">WilFix</h2>
            </Link>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-primaryClr">
                Product
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link rel="noopener noreferrer" href="#">
                    Features
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-primaryClr">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link rel="noopener noreferrer" href="#">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-primaryClr">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <Link rel="noopener noreferrer" href="#">
                    Public API
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link rel="noopener noreferrer" href="#">
                    Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-primaryClr">Social media</div>
              <div className="flex justify-start space-x-3">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <Facebook className="w-5 h-5 fill-current" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="flex items-center p-1"
                >
                  <TwitterLogoIcon className="w-5 h-5 fill-current" />
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <InstagramLogoIcon className="w-5 h-5 fill-current" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-white">
          © {new Date().getFullYear()} WilFix. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
