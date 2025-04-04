// Using of generic type
// const getter = <T>(data: T): T => data;

function getter<T>(data: T): T {
  return data;
}

getter(10).length;
getter("test").length;

// Define type in function calling
getter<number>(10).length; // Property 'length' does not exist on type '10'
getter<string>("test").length; // 4

// Array generic type
let list: Array<number> = [1, 2, 3];
