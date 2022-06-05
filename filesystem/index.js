const fs = require('fs');
const path = require('path');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas !');
        console.log(error);
        return;
    }
    console.log(data);
};

const pathFile = path.resolve(__dirname, 'notes.txt');

fs.readFile(pathFile, 'utf-8', fileReadCallback);

// alternative way using synchronous (the default is asynchronous)

// const fs = require('fs');
// const pathFile = path.resolve(__dirname, 'notes.txt');

// const data = fs.readFileSync(pathFile, 'UTF-8');
// console.log(data);