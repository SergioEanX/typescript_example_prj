"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet(name) {
        console.log(`${this.greeting} ${name}`);
    }
}
exports.Greeter = Greeter;
//# sourceMappingURL=greeter.js.map