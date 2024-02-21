import {Component, OnInit} from '@angular/core';
import {ObservableService} from "../services/observable.service";

@Component({
  selector: 'app-demo-observables',
  templateUrl: './demo-observables.component.html',
  styleUrl: './demo-observables.component.css'
})
export class DemoObservablesComponent implements OnInit{
  nombre!: number;
  input!: number;
  constructor(private _observableService: ObservableService) {
  }

  ngOnInit() {
    this._observableService.nombre.subscribe(
      value => {
        this.nombre=value
      }
    )
  }

  unsubscribe(){
    this._observableService.nombre.unsubscribe();
  }

  nouvelleValeur(){
    this._observableService.nouvelleValeur(this.input);
  }
}
