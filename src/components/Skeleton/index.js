import React from "react";
import Navigation from "../Navigation";

export default function Skeleton() {
  return (
    <>
      <Navigation />
      <div className="w-10/12 py-10 mx-auto">
        <div className="flex md:flex-row flex-col items-center gap-5 animate-pulse">
          <div className="w-[800px] h-[500px] bg-gray-500"></div>
          <div>
            <div className="w-[300px] h-4 bg-gray-500 rounded-lg"></div>
            <div className="w-[200px] h-4 bg-gray-500 my-4 rounded-lg"></div>
            <div className="w-[150px] h-4 bg-gray-500 rounded-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
}
