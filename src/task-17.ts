interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: Company;
  address: Address;
}

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

interface Address {
  city: string;
  geo: { lat: string; lng: string };
  street: string;
  suite: string;
  zipcode: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = (await response.json()) as User[];
  return data;
};

fetchUsers().then((users) => console.log(users));
