interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

users.push({ name: "Olha", age: 28 });

console.log(users);

// users.push({ name: "Alice" }); // error
