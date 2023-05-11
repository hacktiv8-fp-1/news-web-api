import { Navbar } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

// bg-Navbar = bg-[#111827]
// isActiveNavbar = text-[#24A19C]
// noActiveNavbar = text-[#BFCFD4]

// title = text-[#24A19C]

// bg-card = bg-[#111827]
// author-card = text-[#607783]
// title-card = text-[#BFCFD4]
// desc-card = text-[#607783]

// BsBookmarkFill = text-[#24A19C]
// BsBookmark = text-[#24A19C]

// bg-input = bg-[#1F2937]
// bg-button = bg-[#24A19C]
// hover button = bg-[#46b1ad]

export default function pageTest() {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand to="/navbars">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link href="/navbars" className="text-[#24A19C]">
            Home
          </Link>
          <Link href="/navbars" className="text-[#BFCFD4]">
            Home
          </Link>
          <Link href="/navbars" className="text-[#BFCFD4]">
            Home
          </Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="w-10/12 py-10 mx-auto">
        <div className="max-w-screen-2xl m-auto">
          <h2 className="text-3xl font-semibold mb-5 text-[#24A19C]">News</h2>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#111827] dark:border-gray-700">
            <Link href={"/test"} target="_blank">
              <img
                class="rounded-t-lg max-h-44 w-full object-cover"
                src={
                  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
                alt={"image"}
              />
            </Link>
            <div class="p-5 relative">
              <div className="flex items-center mb-5 text-[#607783] text-sm">
                <span className="line-clamp-1">CCN Indonesia</span>
                <RxDotFilled className="mx-3" />
                <span>2023-05-11</span>
              </div>
              <Link href={"/test"} target="_blank">
                <h5 class="mb-3 text-2xl font-bold tracking-tight  dark:text-[#BFCFD4] line-clamp-2">
                  Lorem Ipsum is simply dummy text of the printing
                </h5>
              </Link>
              <p class="mb-3 font-normal text-gray-600 dark:text-[#607783] line-clamp-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {/* {button} */}
              <BsBookmarkFill className="text-[#24A19C] mb-2" />
              <BsBookmark className="text-[#24A19C]" />
            </div>
          </div>
        </div>

        <form>
          <div class="relative my-4">
            <input
              type="search"
              id="default-search"
              class="w-1/4 p-4 pl-10 text-sm text-gray-900 rounded-xl bg-[#1F2937]"
              placeholder="Search Mockups, Logos..."
              required
            />
          </div>
        </form>
        <button
          type="submit"
          class="text-white right-2.5 bottom-2.5 bg-[#24A19C] hover:bg-[#46b1ad] font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </>
  );
}
