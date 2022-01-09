interface Person {
    name: string;
    age: number;
}

let greet = (person: Person) => "Hello " + person.name;

const greeting: string = "Hello";
const numbers: number[] = [1, 2, 3];

const p: Person = {
    name: "John",
    age: 30
}
let c: { name: string, title?: string, age?: number }
c = { name: "John" }
console.log(greet(p))
console.log(c)
console.log(greeting)