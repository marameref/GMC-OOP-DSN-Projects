export class User {
    constructor(name) { this.name = name; }
    update(msg) { console.log(`🔔 [${this.name}]: ${msg}`); }
}
