import {Component, OnDestroy, OnInit} from '@angular/core';
import {DemoJsonplaceholderService} from "../services/demo-jsonplaceholder.service";
import { User} from "../models/User";
import {map, Observable, Subject, Subscription, takeUntil} from "rxjs";

@Component({
  selector: 'app-demo-http-client',
  templateUrl: './demo-http-client.component.html',
  styleUrl: './demo-http-client.component.css'
})
export class DemoHttpClientComponent implements OnInit, OnDestroy{

  tableau!: User[];

  /*
  //Normalement on ferait ça
  mySub!: Subscription;
  */

  $destroyed = new Subject<boolean>();

  //pour ceux qui veulent
  nomUser1!: Observable<string>;

  constructor(private readonly _demoJsonplaceholderService: DemoJsonplaceholderService) {
  }

  ngOnInit() {

    this._demoJsonplaceholderService.getAll().pipe(
      takeUntil(this.$destroyed)
    ).subscribe({
        next: (valeur) => this.tableau=valeur,
        error:(err)=>console.log(err.error()),
        complete:()=>console.log("Chargement terminé")
      }
    );

    /*    Version avec Subscription dans variable mySub
    this.mySub = this._demoJsonplaceholderService.getAll().pipe(
      takeUntil(this.$destroyed)
    ).subscribe({
        next: (valeur) => this.tableau=valeur,
        error:(err)=>console.log(err.error()),
        complete:()=>console.log("Chargement terminé")
      }
    );
    */

    /*    Version de base
    this._demoJsonplaceholderService.getAll().subscribe({
        next: (valeur) => this.tableau=valeur,
        error:(err)=>console.log(err.error()),
        complete:()=>console.log("Chargement terminé")
      }
    );*/

    this.nomUser1 = this._demoJsonplaceholderService.getOne().pipe(
      map(u => u.name)
    )
  }

  ngOnDestroy() {
    /* pour version avec mySub
    this.mySub.unsubscribe();
     */

    this.$destroyed.next(true);
    this.$destroyed.complete();
  }

  envoyer(chose: User){
    this._demoJsonplaceholderService.insert(chose).subscribe()
  }

}
