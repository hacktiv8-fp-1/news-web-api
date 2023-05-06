import React from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";

export default function Navigation() {
  return (
    <Navbar>
      <h1 className="font-medium text-xl dark:text-white">Buletin</h1>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="mx-auto flex md:flex-row flex-col gap-10 items-center">
          <Link className="dark:text-white" href="/indonesia">
            Indonesia
          </Link>
          <Link className="dark:text-white" href="/programming">
            Programming
          </Link>
          <Link className="dark:text-white" href="/covid19">
            COVID19
          </Link>
          <Link className="dark:text-white" href="/saved">
            Saved
          </Link>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 pl-10 text-sm md:mt-0 mt-4 md:mb-0 mb-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."></input>
      </Navbar.Collapse>
    </Navbar>
  );
}
