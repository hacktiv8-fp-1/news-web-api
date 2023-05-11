import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ item, href }) {
  const router = useRouter();
  const path = window.location.pathname;
  console.log("router", router.pathname);
  console.log("path", path);
  return (
    <div className={`mx-auto flex md:flex-row flex-col gap-10 items-center `}>
      {/* <Link className={"dark:text-[#24A19C]"} href={href}>
        {item}
      </Link> */}
      <Link
        href={href}
        className={
          router.pathname === path
            ? "dark:text-[#24A19C]"
            : " dark:text-[#BFCFD4]"
        }
      >
        {item}
      </Link>
    </div>
  );
}
