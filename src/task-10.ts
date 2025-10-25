const users = ["alice", "bob", "charlie"];

interface UserObject {
  id: number;
  name: string;
}

function toUserObjects(users: string[]): UserObject[] {
  return users.map((user, index) => {
    return {
      id: index + 1,
      name: user,
    };
  });
}

console.log(toUserObjects(users));
