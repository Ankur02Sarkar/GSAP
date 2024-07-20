"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Infinity from "@/assets/infinity.gif";
import Image from "next/image";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      const matchedResults = [];
      for (let i = 0; i <= 128; i++) {
        const effect = `Effect ${String(i).padStart(3, "0")}`;
        if (effect.toLowerCase().includes(term.toLowerCase())) {
          matchedResults.push(effect);
        }
      }
      setResults(matchedResults);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (effect) => {
    const effectNumber = effect.split(" ")[1];
    router.push(`/effect${effectNumber}`);
  };

  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src={Infinity}
          alt="Logo"
          className="h-10 w-10 mr-4 rounded-full object-cover"
        />
        <span className="text-white font-bold text-xl">Navbar</span>
      </div>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 rounded bg-white"
          placeholder="Search Effect"
        />
        {results.length > 0 && (
          <ul className="absolute bg-white border rounded mt-1 w-full max-h-48 overflow-auto z-10">
            {results.map((effect) => (
              <li
                key={effect}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleResultClick(effect)}
              >
                {effect}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
