import { Component } from '@angular/core';
import {InscriptionService} from "../services/inscription.service";
import {ActivatedRoute} from "@angular/router";
import {Personne} from "../models/Personne";

@Component({
  selector: 'app-exo-routing',
  templateUrl: './exo-routing.component.html',
  styleUrl: './exo-routing.component.css'
})
export class ExoRoutingComponent {

  userConnected?:Personne;

  constructor(private _inscriptionService: InscriptionService,
              private _activatedRoute: ActivatedRoute) {
    this.userConnected = _inscriptionService.getUserConnected(this._activatedRoute.snapshot.params['prenom'])
  }

}
