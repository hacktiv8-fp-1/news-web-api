import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ item, href }) {
  const router = useRouter();
  return (
    <div className={`mx-auto flex md:flex-row flex-col gap-10 items-center `}>
      {/* <Link className={"dark:text-[#24A19C]"} href={href}>
        {item}
      </Link> */}
      <Link
        href={href}
        className={
          router.asPath === href
            ? "text-[#24A19C] lg:my-0 my-2"
            : "dark:text-[#ececec] text-slate-600 lg:my-0 my-2"
        }>
        {item}
      </Link>
    </div>
  );
}
