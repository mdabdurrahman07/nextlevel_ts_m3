// oop - CLASS -> OBJECT

// property initialized
// class Animal {
//   constructor(name: string, species: string, sound: string) {
//     ((this.name = name), (this.species = species), (this.sound = sound));
//   }
//   name: string;
//   species: string;
//   sound: string;

//   // method initialized
//   makeSound(){
//     console.log(`${this.name} is making sound ${this.sound}`)
//   }
// }

// parameter properties
class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}

  // method initialized
  makeSound() {
    console.log(`${this.name} is making sound ${this.sound}`);
  }
}

// we have to call every class by new
const dog = new Animal("dogesh bhai", "dog", "ghew ghew");

dog.makeSound();
// cat

const cat = new Animal("cat bhai", "cat", "mew mew");
cat.makeSound();
