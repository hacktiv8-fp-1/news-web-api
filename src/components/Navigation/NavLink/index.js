import React from "react";
import Link from "next/link";

export default function NavLink({ item, href }) {
  return (
    <div className={`mx-auto flex md:flex-row flex-col gap-10 items-center `}>
      <Link className={"dark:text-white"} href={href}>
        {item}
      </Link>
    </div>
  );
}
