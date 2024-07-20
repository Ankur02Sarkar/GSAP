const fs = require("fs");
const path = require("path");

// Function to format numbers with leading zeros
const padNumber = (num, size) => {
  let s = "000" + num;
  return s.substr(s.length - size);
};

const createFoldersAndFiles = (start, end) => {
  for (let i = start; i <= end; i++) {
    const folderName = `effect${padNumber(i, 3)}`;
    const folderPath = path.join(__dirname, folderName);

    // Create folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    const paddedNumber = padNumber(i, 3);

    // Content for page.js file
    const pageContent = `
"use client";
import React from "react";
import Effect${paddedNumber} from "./Effect${paddedNumber}";

const page = () => {
  return (
    <div>
      <Effect${paddedNumber} />
    </div>
  );
};

export default page;
    `.trim();

    // Path for page.js file
    const pageFilePath = path.join(folderPath, "page.js");

    // Write the content to page.js file
    fs.writeFileSync(pageFilePath, pageContent, "utf8");

    // Content for Effect<id>.js file
    const effectContent = `
"use client";
import gsap from "gsap";
import React from "react";

const Effect${paddedNumber} = () => {
  const handleAnimate = () => {
    gsap.fromTo(
      ".heading",
      { rotate: 0 },
      { rotate: 360, duration: 1, clearProps: "all" }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-12">
      <h1 className="heading text-4xl font-bold mb-4">Effect ${paddedNumber}</h1>
      <button
        onClick={handleAnimate}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Animate
      </button>
    </div>
  );
};

export default Effect${paddedNumber};
    `.trim();

    // Path for Effect<id>.js file
    const effectFilePath = path.join(folderPath, `Effect${paddedNumber}.js`);

    // Write the content to Effect<id>.js file
    fs.writeFileSync(effectFilePath, effectContent, "utf8");
  }
};

// Call the function to create folders and files
createFoldersAndFiles(1, 128);

console.log("Folders and files created successfully.");
