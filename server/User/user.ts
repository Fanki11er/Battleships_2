import { UserStatus } from "../Helpers/Types";

export class User {
  private name;
  private id;
  private status: UserStatus = "";
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
  getStatus(){
    return this.status;
  }
  setStatus(status: UserStatus){
    this.status = status;
  }
}
