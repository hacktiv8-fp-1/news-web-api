import React from "react";

export default function SkeletonCard() {
  return (
    <div className="max-w-screen-2xl mt-[50px]">
      <div className="w-[150px] h-[30px] bg-gray-300 mb-3 rounded-lg animate-pulse"></div>
      <div className="w-[200px] h-[20px] bg-gray-300 mb-3 rounded-lg animate-pulse"></div>
      <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-4 3xl:grid-cols-5 gap-5 justify-center relative">
        {Array(8)
          .fill()
          .map((_, i) => (
            <div
              class="max-w-sm border border-gray-200 rounded-lg shadow bg-gray-200 animate-pulse"
              key={i}
            >
              <div className="h-44 bg-gray-300 w-full rounded-t-lg"></div>
              <div class="p-5 relative">
                <div className="flex items-center mb-5">
                  <div className="w-[80px] h-[15px] bg-gray-300 rounded-lg"></div>
                  <span className="pr-3" />
                  <div className="w-[80px] h-[15px] bg-gray-300 rounded-lg"></div>
                </div>
                <div className="w-[200px] h-[15px] mb-3 bg-gray-300 rounded-lg"></div>
                <div className="w-[150px] h-[15px] mb-3 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
