import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  nombre = new BehaviorSubject<number>(0);
  constructor() { }

  nouvelleValeur(nombre: number){
    this.nombre.next(nombre);
  }
}
