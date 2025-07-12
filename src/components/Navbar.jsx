"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/project", label: "Project" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-primaryBackground">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="">
              <div className=" font-extrabold whitespace-nowrap dark:text-white flex flex-col justify-center items-center">
                <Image
                  src="/images/logo.png"
                  width={80}
                  height={80}
                  alt="logo"
                  className="mt-5"
                />
                <span className="mb-2">AUgurlu</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white hover:text-purple-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-400 focus:outline-none px-2 py-1"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-900`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3 border-t border-gray-800">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block text-white hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Purple accent line */}
      <div className="h-1 bg-gradient-to-r from-purple-700 to-purple-500 w-full mt-5"></div>
    </header>
  );
};

export default Navbar;
