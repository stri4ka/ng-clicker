import { Injectable } from '@angular/core';

import { GameResult } from '../shared/game-result.model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  private _data: GameResult = {
    clickCount: 0,
    time: 10,
    playerName: '',
    countPerSec: 0,
  };

  public setPlayerName(playerName) {
    localStorage.setItem('name', playerName);
  }

  public getPlayerName() {
    return localStorage.getItem('name');
  }

  public setGameTime(time: number) {
    localStorage.setItem('timer', time.toString());
  }

  public getGameTime() {
    if (!localStorage.getItem('timer')) this.setGameTime(10);
    return Number(localStorage.getItem('timer'));
  }

  public setClickCount(clickCount: number): void {
    localStorage.setItem('clicks', JSON.stringify(clickCount));
  }

  public getClickCount() {
    return JSON.parse(localStorage.getItem('clicks'));
  }

  public getClickCountPerSec() {
    return this.getClickCount() / this.getGameTime();
  }

  public getGameResults(): GameResult {
    this._data.playerName = this.getPlayerName();
    this._data.countPerSec = this.getClickCountPerSec();
    return this._data;
  }
}
