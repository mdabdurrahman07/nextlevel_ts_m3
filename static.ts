// static ->> a function that belongs to the class itself rather than to any specific instance of that class

class Counter {
  // by using static this will have only one reference
  static count: number = 0;
  static increment() {
    // Property 'count' does not exist on type 'Counter'. Did you mean to access the static member 'Counter.count' instead?
    return (Counter.count = Counter.count + 1);
  }
  static decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

// before using static

// //! this instance1 is working on a memory
// const instance1 = new Counter();
// console.log("instance1", instance1.increment()); ->1
// console.log("instance1", instance1.increment()); ->2
// console.log("instance1", instance1.increment()); ->3
// console.log("instance1", instance1.increment()); ->4

// //! this instance2 is working on a different memory
// const instance2 = new Counter();
// console.log("instance2", instance2.increment()); -> 1
// console.log("instance2", instance2.increment()); -> 2
// console.log("instance2", instance2.increment()); -> 3
// console.log("instance2", instance2.increment()); -> 4

// after using static

// ! both instance1 & instance2 are using same memory also we don't have to define any instance for this

console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
console.log(Counter.increment())
