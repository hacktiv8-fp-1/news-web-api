import React from "react";

export default function TabsFilter({ lists, filterCategory, onClick }) {
  return (
    <ul className="hidden my-5 w-1/2 text-sm font-medium text-center items-center divide-x divide-[#e8e8e9] rounded-lg shadow sm:flex">
      {lists.map((item, i) => (
        <li class="w-full" key={i}>
          <a
            onClick={() => onClick(item)}
            className={`inline-block w-full p-3 cursor-pointer bg-[#f8f9fa] focus:outline-none ${
              filterCategory === item.value
                ? " dark:bg-[#24A19C] text-[#f8f9fa]"
                : " dark:bg-[#f8f9fa] text-[#111827]"
            }`}
          >
            {item.value}
          </a>
        </li>
      ))}
    </ul>
  );
}
