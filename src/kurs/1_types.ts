// Simple types

const str: string = "Hello";

const isFetching: boolean = false;
const isLoading: boolean = true;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello Typescript";

// Array

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13, 21];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13, 21];

const words: string[] = ["Hello", "Typescript"];

// Tuple

const contact: [string, number] = ["Ivan", 1234567];

// Any

let variable: any = 42;

variable = "New string";
variable = [];

// Void
function sayHello(name: string): void {
  console.log(`Hello, ${name.toUpperCase()}`);
}

sayHello("Mango");

// Never
function throwError(message: string): never {
  throw new Error(message);
}

throwError("Error");

// Type

type Login = string;

const login: Login = "admin";
// const login2: Login = 2;

type ID = string | number;
const id1: ID = 5;
const id2: ID = "10";
// const id3: ID = true;

// null | undefined

type SomeType = string | null | undefined;
