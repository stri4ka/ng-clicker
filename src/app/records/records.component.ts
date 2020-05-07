import { Component, OnInit } from '@angular/core';

import { RecordsService } from '../shared/records.service';
import { GameResult } from '../shared/game-result.model';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {
  records: GameResult[] = [];

  constructor(private recordsService: RecordsService) { }

  ngOnInit(): void {
    this.records = this.recordsService.getRecords();
    console.log(this.records);
  }
}
