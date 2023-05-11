import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ item, href }) {
  const router = useRouter();
  return (
    <div className="mx-auto flex md:flex-row flex-col gap-10 items-center">
      <Link
        className={
          router.asPath === href
            ? "dark:text-white text-black"
            : "dark:text-slate-300 text-slate-500"
        }
        href={href}>
        {item}
      </Link>
    </div>
  );
}
