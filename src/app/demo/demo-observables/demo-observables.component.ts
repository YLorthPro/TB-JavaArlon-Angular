import {Component, OnInit} from '@angular/core';
import {ObservableService} from "../services/observable.service";
import {filter, map, tap} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-demo-observables',
  templateUrl: './demo-observables.component.html',
  styleUrl: './demo-observables.component.css'
})
export class DemoObservablesComponent implements OnInit{
  nombre!: number;
  tab!: number[];
  input!: number;
  constructor(private _observableService: ObservableService) {
  }

  ngOnInit() {
    this._observableService.nombre.subscribe(
      value => {
        this.nombre=value
      }
    )
    this._observableService.tableauDeNombre.pipe(
      map((tab)=>tab.filter(element => element%2 == 0))
    ).subscribe({
      next: (valeur)=>{
        console.log("Tout s'est bien passé")
        this.tab=valeur;
      },
      error: (err)=>console.log("Aie aie aie Geoffrey a tout cassé"),
      complete: ()=>console.log ("Terminé")
    })
  }

  unsubscribe(){
    this._observableService.nombre.unsubscribe();
  }

  nouvelleValeur(){
    this._observableService.nouvelleValeur(this.input);
  }
}
