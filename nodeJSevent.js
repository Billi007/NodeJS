import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
  setTimeout(() => {
    console.log("an event occurred! Again!!")
  }, 3000);
});

myEmitter.emit('event');
console.log("The script is running.")
console.log("The script is still running.")