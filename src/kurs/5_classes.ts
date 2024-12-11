// CLASSES

class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4; // public by default

//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

class Car {
  readonly numberOfWheels: number = 4; // public by default
  constructor(readonly model: string) {}
}

// МОДИФИКАТОРЫ

// public - по умолчанию, все поля доступны
// private - только внутри класса, не доступны в классах-наследниках
// protected - внутри класса и в классах-наследниках, но доступны только внутри класса

class Animal {
  protected voice: string = "";
  public color: string = "black";

  constructor() {
    this.go(); // можно вызвать в конструкторе
  }

  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();

cat.setVoice("meow"); // public
console.log(cat.color); // public
// console.log(cat.go()); // private
// console.log(cat.voice); // protected

// ----------------АБСТРАКТНЫЕ КЛАССЫ----------------

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component on render");
  }
  info(): string {
    return "This is info";
  }
}
