import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import News from "@/components/News/news";

export default function Pageindonesia() {
  return (
    <>
      <Navigation />
      <div className="w-10/12 py-10 mx-auto">
        <Hero />
        <News />
      </div>
    </>
  );
}
