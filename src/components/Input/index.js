import React from "react";

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      id="search-navbar"
      className="block w-full p-2 pl-10 text-sm md:mt-0 mt-4 md:mb-0 mb-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
