import { Injectable } from '@angular/core';

import { GameResult } from '../shared/game-result.model';

@Injectable({
    providedIn: 'root',
})
export class RecordsService {
    constructor() { }

    setRecords(gameRecords: GameResult) {
        const records = this.getRecords();
        records.push(gameRecords);
        records.sort((a, b) => b.countPerSec - a.countPerSec);
        localStorage.setItem('Records', JSON.stringify(records));
    }

    getRecords() {
        const result = JSON.parse(localStorage.getItem('Records'));
        if (result === null) {
            return [];
        }
        return result;
    }
}
