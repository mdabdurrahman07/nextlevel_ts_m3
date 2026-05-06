class Person {
  getSleep() {
    console.log("I am a normal person and I sleep for 8 hours");
  }
}

class Student extends Person {
  getSleep() {
    console.log("I am a student and I sleep for 7 hours");
  }
}

class NextLevelDev extends Person {
  getSleep() {
    console.log("I am a student and I sleep for 6 hours");
  }
}

const getSleepingHours = (params: Person) => {
  params.getSleep();
};

const person = new Person();
const person1 = new Student();
const person2 = new NextLevelDev();

getSleepingHours(person);
getSleepingHours(person1);
getSleepingHours(person2);
