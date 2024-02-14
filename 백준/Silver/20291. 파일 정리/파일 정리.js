// /dev/stdin
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift(); 
let fileType = {};

input.forEach(file => {
    const extension = file.split(".")[1];
    fileType[extension] = (fileType[extension] || 0) + 1;
});

const sortedFileType = Object.entries(fileType).sort((a, b) => a[0] < b[0] ? -1 : 1);

sortedFileType.forEach(([extension, count]) => {
    console.log(`${extension} ${count}`);
});