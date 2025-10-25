// interface User {
//   name: string;
//   address?: {
//     city: string;
//   };
// }

// const user: User = {
//   name: "Alice",
//   address: {
//     city: "Kyiv",
//   },
// };

// console.log(user.address?.city);

// //
//

interface Address {
  city: string;
}

interface User {
  name: string;
  address?: Address;
}

const user: User = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

console.log(user.address?.city);
