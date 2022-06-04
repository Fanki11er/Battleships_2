import { Server, Socket } from 'socket.io';
import { Battle } from '../Battle/Battle';
import { Game } from '../Game/Game';
import { Shot, ShotResult, UserStatus } from '../Helpers/Types';
import { Room } from '../Room/room';

export class User {
  private name;
  private id;
  protected status: UserStatus = '';
  protected isComputer = false;
  constructor(name: string = 'Unknown', id: string) {
    this.name = name;
    this.id = id;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getStatus() {
    return this.status;
  }
  setStatus(status: UserStatus) {
    this.status = status;
  }
  getIsComputer() {
    return this.isComputer;
  }
}

export class Computer extends User {
  readonly isComputer = true;
  private battle: Battle | undefined;

  protected status: UserStatus = 'preparing';
  constructor(name: string = 'Unknown', id: string) {
    super(name, id);
  }

  takeAShot = () => {
    return {
      coordinates: this.battle?.takeShot(),
      userId: this.getId(),
    } as Shot;
  };

  checkShotResult = (shotResult: ShotResult | undefined) => {
    shotResult && this.battle?.checkResult(shotResult);
  };

  startBattle = () => {
    this.battle = new Battle();
  };

  stopBattle = () => {
    this.battle = undefined;
  };
}
