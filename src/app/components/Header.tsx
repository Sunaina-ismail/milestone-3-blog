"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 relative ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl lg:text-3xl  font-bold text-orange-600">
          <h1 className="font-serif">Glow Giver</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-lg hover:text-gray-600 font-serif text-orange-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg hover:text-gray-600 font-serif text-orange-600"
          >
            About
          </Link>

          <Link
            href="/BlogData"
            className="text-lg hover:text-gray-600 font-serif text-orange-600"
          >
            Blog
          </Link>
        </nav>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl focus:outline-none z-50"
          >
            {menuOpen ? (
              <IoClose className="text-3xl z-50 text-orange-600" />
            ) : (
              <GiHamburgerMenu className="text-3xl text-orange-600" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-orange-50 opacity-90 shadow-lg md:hidden z-50">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link
              href="/"
              className="text-lg hover:text-gray-600 font-serif text-orange-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-serif hover:text-gray-600 text-orange-600"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/Blog"
              className="text-lg font-serif hover:text-gray-600 text-orange-600"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
