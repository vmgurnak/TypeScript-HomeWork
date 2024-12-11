// operators

interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = "name";
key = "age";

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeys = keyof User; // '_id' | 'name' | 'email' | 'createdAt'
type UserKeysNoMeta1 = Exclude<UserKeys, "_id" | "createdAt">; // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, "name" | "email">; // 'name' | 'email'

let u1: UserKeysNoMeta1 = "name";
// u1 = "_id"; // error
const u2: UserKeysNoMeta2 = {
  name: "Mango",
  email: "john@example.com",
};
