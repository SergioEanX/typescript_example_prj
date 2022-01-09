export class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet(name: string) {
        console.log(`${this.greeting} ${name}`);

    }
}