// instance of guard / type guard

// parent class
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// child class
class Student extends Person {
  // for documentation and better readability writing the parent class property is safe
  constructor(name: string) {
    super(name);
  }
}
