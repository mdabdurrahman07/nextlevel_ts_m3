// instance of guard / type guard

// parent class
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  //   common method
  getSleep(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} ghonta ghumai`);
  }
}

// child class
class Student extends Person {
  // for documentation and better readability writing the parent class property is safe
  constructor(name: string) {
    super(name);
  }
  //   own method

  doStudy(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} study kore`);
  }
}

// another child class

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  // own method
  takeClass(numOfHours: number) {
    console.log(`${this.name} doinik ${numOfHours} class nei`);
  }
}

// as class is a blue print so we can use class a type
const userInfo = (user: Person) => {
  if (user instanceof Student) {
    user.doStudy(6);
  } else if (user instanceof Teacher) {
    user.takeClass(3);
  } else {
    user.getSleep(10);
  }
};

// now creating a instance
const student1 = new Student("MR Student");
const teacher1 = new Teacher("MR Student");
const user = new Person("Jamil")

userInfo(student1);
userInfo(teacher1)
userInfo(user)