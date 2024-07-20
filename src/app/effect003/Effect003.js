"use client";
import gsap from "gsap";
import React from "react";

const Effect003 = () => {
  const handleAnimate = () => {
    gsap.fromTo(
      ".heading",
      { rotate: 0 },
      { rotate: 360, duration: 1, clearProps: "all" }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-12">
      <h1 className="heading text-4xl font-bold mb-4">Effect 003</h1>
      <button
        onClick={handleAnimate}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Animate
      </button>
    </div>
  );
};

export default Effect003;