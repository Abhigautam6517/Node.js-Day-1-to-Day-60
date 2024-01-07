// To Write console we do not need any Import so we called core module
// conosole.log() already built IN so we called core module or global modeule.

console.log("Hello World!!");

// so What is non - global Module??
//Here are simple example so we know that,
// we work on file systme in backend or node js 
// How we do that

//fs.writeFileSync("Hello ","file.txt");

// so we have  run this but we got error 
// Error is , fs is not defined
const fs = require("fs");
fs.writeFileSync("file.txt", "Hello ");

// so any thing we import outside so we called No global module