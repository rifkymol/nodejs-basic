const fs   = require('fs');
const path = require('path');

const pathInput  = path.resolve(__dirname, 'input.txt');
const pathOutput = path.resolve(__dirname, 'output.txt');

// create var for reading file input.txt every 15 character
const readableStream = fs.createReadStream(pathInput, {
    highWaterMark: 15
});

// create var for writing file output.txt
const writeableStream = fs.createWriteStream(pathOutput);

// reading the input.txt first then if its success write the value to output.txt
readableStream.on('readable', () => {
    try {
        writeableStream.write(`[${readableStream.read()}]\n`);
    } catch (error) {
        
    }
})

readableStream.on('end', () => {
    writeableStream.end();
});


