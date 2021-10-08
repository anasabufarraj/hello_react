class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}!`;
  }
}

export default class Instructor extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
  teach() {
    return `${this.name} teaches ${this.subject}.`;
  }
}
