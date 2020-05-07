import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../shared/user.data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  public playerName = '';

  constructor(private router: Router, private _data: UserDataService) { }

  public handlePlayButtonClick() {
    if (!this.playerName) {
      alert('player name is required');
      return;
    }
    this._data.setPlayerName(this.playerName);

    this.router.navigate(['game']);
  }
}
