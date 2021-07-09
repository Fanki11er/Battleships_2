export class User {
  private name;
  private id;
  constructor(name: String = "Unknown", id: String) {
    this.name = name;
    this.id = id;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
}
