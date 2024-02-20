import { Injectable } from '@angular/core';
import {Personne} from "../models/Personne";
import {User} from "../../demo/login/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private liste: Personne[] = [
    new Personne('Depierreux', 'Geoffrey', new Date(2000,3,27), '123','Chez Sam', 6800, 'Bertrix'),
    new Personne('Beyer De Ryke', 'Samuel', new Date(2000,3,27), '123','Chez Sam', 6800, 'Bertrix')
  ]

  connectedUser?: Personne;
  constructor(private _router: Router) {
  }

  addPersonne(personne: Personne) {
      this.liste.push(personne);
  }

  getPersonnes(): Personne[] {
      return this.liste;
  }

  connect(prenom:string, nom: string) {
    // On vérifie si le login reçu est présent en DB
    this.connectedUser = this.liste.find((user) => user.prenom === prenom);

    if (this.connectedUser) {
      // Si on l'a trouvé, si le password n'est pas ok
      if (this.connectedUser.nom !== nom) {
        this.connectedUser = undefined;
      } else {
        this._router.navigate(['exercice/mon-profil/'+this.connectedUser.prenom])
      }
    }
  }

  getUserConnected(prenom: string){
    return this.liste.find((user) => user.prenom === prenom);
  }

  disconnect() {
    this.connectedUser = undefined;
  }
}
