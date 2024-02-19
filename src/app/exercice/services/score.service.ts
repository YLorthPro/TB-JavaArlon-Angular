import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  score: number[] = [0,0];

  constructor() { }

  getVictoires(){
    return this.score[0];
  }

  getDefaites(){
    return this.score[1];
  }

  setVictoires(){
    this.score[0]++;
  }

  setDefaites(){
    this.score[1]++;
  }
}
