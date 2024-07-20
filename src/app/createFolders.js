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

    // Content for page.js file
    const fileContent = `
import React from 'react';

const page = () => {
  return (
    <div>Effect ${padNumber(i, 3)}</div>
  );
}

export default page;
    `.trim();

    // Path for page.js file
    const filePath = path.join(folderPath, "page.js");

    // Write the content to page.js file
    fs.writeFileSync(filePath, fileContent, "utf8");
  }
};

// Call the function to create folders and files
createFoldersAndFiles(1, 128);

console.log("Folders and files created successfully.");
