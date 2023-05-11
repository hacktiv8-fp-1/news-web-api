import React from "react";

export default function TabsFilter({ lists, filterCategory, onClick }) {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-semibold text-[#24A19D]">Filter:</h1>
      <ul className="my-5 rounded-xl w-1/2 text-sm font-medium text-center items-center divide-x divide-[#e8e8e9]  shadow sm:flex">
        {lists.map((item, i) => (
          <li className="w-full" key={i}>
            <a
              onClick={() => onClick(item)}
              className={`inline-block w-full p-3 cursor-pointer focus:outline-none ${
                filterCategory === item.value
                  ? " bg-[#4f9b98] text-[#f8f9fa]"
                  : " bg-[#f8f9fa] text-[#111827]"
              }`}>
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
