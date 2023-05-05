import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Container } from "postcss";

export default function Pageindonesia() {
  return (
    <>
      <Navigation />
      <div className="w-10/12 py-10 mx-auto">
        <Hero />
      </div>
    </>
  );
}
