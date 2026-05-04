// in Teacher and Student class some property and one method is common so make a parent class and that class property will use in Teacher and Student class
class parent {
    constructor(name: string, age: number, address: string) {
    // common
    this.name = name;
    // common
    this.age = age;
    // common
    this.address = address;
  }
  name: string;
  age: number;
  address: string;
  //   common method
  getSleep(numOfHours: number) {
    console.log(`${this.name} ${numOfHours} ghonta ghumai`);
  }
}


class student extends parent {
  
}

const student1 = new student(`Mr Fakibaaz`, 24, "BD");
student1.getSleep(5)

class Teacher extends parent {
  constructor(name: string, age: number, address: string, designation: string) {
    // super call
    super(name, age, address)
    // own property
    this.designation = designation;
  }
  designation: string;
  //   own method
  takeClass(numOfClass: number) {
    console.log(`${this.name} aato ${numOfClass} class nei`);
  }
}



const teacher1 = new Teacher("MR Karim", 55, "Dhaka", "Math");
teacher1.takeClass(2)
