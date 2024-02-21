import {Component, OnInit} from '@angular/core';
import {SecuriteService} from "../services/securite.service";
import {Badge, UserDTO} from "../models/Auth";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-exo-mesbadges',
  templateUrl: './exo-mesbadges.component.html',
  styleUrl: './exo-mesbadges.component.css'
})
export class ExoMesbadgesComponent implements OnInit{
  userConnected!: string | null;

  userBadges!: Observable<Badge[]>;
  users?: Observable<string[]>;

  constructor(private readonly _securiteService: SecuriteService) {
    this._securiteService.userConnected.subscribe(user => {
      this.userConnected = user;
    });
  }

  ngOnInit(){
    this.userBadges = this._securiteService.getOne().pipe(
      map( user => user.badges)
    )
    this.users = this._securiteService.getAllNames()
  }

  protected readonly localStorage = localStorage;
}
