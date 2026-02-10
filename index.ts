interface User {
  id: number;
  name: string;
  email: string;
  age?: number; 
}
class UserManager {
  private users: User[] = [];

  addUser = (user: User): void => {
    this.users = [...this.users, user]; 
  };

  removeUser = (id: number): void => {
    this.users = this.users.filter(user => user.id !== id);
  };

  getUser = (id: number): User | undefined => {
    return this.users.find(user => user.id === id);
  };

  getAllUsers = (): User[] => {
    return [...this.users]; 
  };
  getUserGreeting = (name: string = "Guest"): string => {
    return `Hello, ${name}! Welcome back `;
  };
}

const printUserDetails = (user: User): void => {
  const { id, name, email, age } = user;

  console.log(`ID: ${id}`);
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Age: ${age ?? "Not provided"}`);
};


const manager = new UserManager();

manager.addUser({ id: 1, name: "Ambar", email: "ambar@gmail.com", age: 22 });
manager.addUser({ id: 2, name: "Rahul", email: "rahul@gmail.com" });

console.log(manager.getAllUsers());
const user = manager.getUser(1);
if (user) {
  printUserDetails(user);
}

console.log(manager.getUserGreeting());
console.log(manager.getUserGreeting("Ambar"));
