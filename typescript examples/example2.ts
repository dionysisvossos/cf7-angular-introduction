const personDescription = (name: string, city: string, age: number) => `${name} is ${age} years old and lives in ${city}. In 10 years, they will be ${age + 10} years old.`;

console.log(personDescription("Alice", "New York", 30));