import React from "react";

export default function Button({ className, type, onClick, children }) {
  return (
    // <button type={type} className="bg-slate-600" onClick={onClick}>
    //   {children}
    // </button>
    <button
      type={type}
      className="bg-[#24A19C] border border-gray-300 focus:outline-none hover:bg-[#46b1ad] focus:ring-4 focus:ring-gray-200 font-medium text-md rounded-lg px-5 py-2.5 mr-2 text-white dark:border-gray-600  dark:hover:border-gray-600 dark:focus:ring-gray-700"
      onClick={onClick}>
      {children}
    </button>
  );
}
