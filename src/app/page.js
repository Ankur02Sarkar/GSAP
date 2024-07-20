import React from "react";
import Link from "next/link";

const Home = () => {
  const effects = Array.from(
    { length: 128 },
    (_, i) => `effect${String(i + 1).padStart(3, "0")}`
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Effects List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg">
        {effects.map((effect) => (
          <Link key={effect} href={`/${effect}`}>
            <div className="block bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-center text-xl font-semibold text-gray-700">
                {effect}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
