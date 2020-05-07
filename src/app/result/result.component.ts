import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user.data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  public playerName: string;
  public time: number;
  public score: number;
  public countPerSec: number;
  public message: string;

  constructor(private router: Router, private _data: UserDataService) {
    this.playerName = this._data.getPlayerName();
    this.time = this._data.getGameTime();
    this.score = this._data.getClickCount();
    this.countPerSec = this._data.getClickCountPerSec();
  }

  ngOnInit(): void {
    this.showMessage();
  }

  onChangePlayer() {
    this.router.navigate(['welcome']);
  }

  restartGame() {
    this.router.navigate(['game']);
  }

  showMessage(): void {
    switch (true) {
      case this.countPerSec > 6:
        this.message = 'Wow! You are mega monster in this game!';
        break;
      case this.countPerSec > 4:
        this.message = 'Okay! That was quite decent, but there is still room for improvement. Try again?';
        break;
      case this.countPerSec > 3:
        this.message = 'You can do better!';
        break;
      case this.countPerSec > 1:
        this.message = 'Hehe, even my grandma can do better!';
        break;
      case this.countPerSec >= 0:
        this.message = 'Time out! Try again and maybe you will be on of the best?'
        break;
      default:
        this.message = "Wait, how it happened?";
        break;
    }
  }

}
