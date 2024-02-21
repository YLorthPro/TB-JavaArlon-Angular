import {Component, OnDestroy, OnInit} from '@angular/core';
import {DemoPostService} from "../services/demo-post.service";
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

  constructor(private readonly _demoPostService: DemoPostService) {
  }

  ngOnInit() {
    /*this.mySub = */this._demoPostService.getAll().pipe(
      takeUntil(this.$destroyed)
    ).subscribe({
      next: (valeur) => this.tableau=valeur,
      error:(err)=>console.log(err.error()),
      complete:()=>console.log("Chargement terminé")
      }
    );

    this.nomUser1 = this._demoPostService.getOne().pipe(
      map(u => u.name)
    )
  }

  ngOnDestroy() {
    /*
    this.mySub.unsubscribe();
     */

    this.$destroyed.next(true);
    this.$destroyed.complete();
  }

  envoyer(chose: User){
    this._demoPostService.insert(chose).subscribe()
  }

}
