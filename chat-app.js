/*
You're working on a chat app for WhatIsThisApp. Someone from your team
has committed this code, but there's a problem with it. Reciever doesn't
seem to be receiving any messages.
The manager on your team has asked if you can look into this problem 
to resolve the issue. Can you get the code into a working state?

 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 * 
*/

const solution = messages => {
  class Emitter {
    constructor(messages = []) {
      this.messages = messages;
    }
    setEvent(fn) {
      this.event = fn;
    }
    trigger() {
      this.messages.forEach(message => this.event(message));
    }
  }

  class Receiver {
    constructor() {
      this.messages = [];
      this.event = () => {};
      // this.ping = this.ping.bind(this);
    }
    // use ES6 arrow function to bind
    ping = message => {
      this.messages.push(message);
    };
  }

  const myEmitter = new Emitter(messages);
  const myReceiver = new Receiver();
  myEmitter.setEvent(myReceiver.ping);
  myEmitter.trigger();
  return myReceiver.messages;
};
console.log(solution(['hello', 'bob']));
// should return ['hello', 'bob']; but is returning: [] */

var num1 = '1';
console.log((Math.round(num1 * 100) / 100).toFixed(2));
