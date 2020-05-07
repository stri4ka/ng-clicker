import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user.data.service';
import { RecordsService } from '../shared/records.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public timer: number[];
  public playerName: string;
  public clickCounter: number;
  public gameProgress: boolean;

  public buttonTitle: string;
  public form: FormGroup;
  public Timer = {
    interval: null,
    gameTime: null,
    timerStart: () => {
      this.Timer.interval = setInterval(() => {
        --this.Timer.gameTime === 0 ? this.Timer.timerStop() : 0;
      }, 1000);
    },
    timerStop: () => {
      clearInterval(this.Timer.interval);

      this.endGame();
    },
  };

  constructor(
    private router: Router,
    private _data: UserDataService,
    private recordService: RecordsService
  ) { }

  ngOnInit() {
    this.playerName = this._data.getPlayerName();
    this.clickCounter = 0;
    this.gameProgress = false;
    this.buttonTitle = 'Start';
    this.timer = [5, 10, 15, 20, 30];
    this.form = new FormGroup({
      time: new FormControl(this._data.getGameTime()),
    });
  }

  startGame() {
    if (!this.gameProgress && this.Timer.interval === null) {
      this.gameProgress = true;
      this.buttonTitle = 'Click';
      this._data.setGameTime(this.form.value.time);
      console.log(this._data);

      this.Timer.gameTime = this.form.value.time;
      this.Timer.timerStart();
    } else {
      this.clickCounter++;
    }
  }

  endGame() {
    this._data.setClickCount(this.clickCounter);
    this.recordService.setRecords(this._data.getGameResults());
    this.router.navigate(['results']);
  }
}
