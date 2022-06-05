const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

const weddingEventListener = (name) => {
    console.log(`Happy Wedding ${name}`);
}

myEmitter.on('wedding', weddingEventListener);

myEmitter.emit('wedding', 'rani');