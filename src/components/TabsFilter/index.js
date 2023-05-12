import React from "react";

export default function TabsFilter({ lists, filterCategory, onClick }) {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-semibold text-[#24A19D]">Filter:</h1>
      <ul className="my-5 rounded-xl w-1/2 text-sm font-medium text-center items-center divide-x dark:divide-[#273446] divide-slate-300 shadow sm:flex">
        {lists.map((item, i) => (
          <li className="w-full" key={i}>
            <a
              onClick={() => onClick(item)}
              className={`inline-block w-full p-3 cursor-pointer focus:outline-none ${
                filterCategory === item.value
                  ? " bg-[#74bbb9] text-[#f8f9fa]"
                  : " dark:bg-[#262f3b] bg-[#f8f9fa] dark:text-[#ececec] text-[#607783]"
              }`}>
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
