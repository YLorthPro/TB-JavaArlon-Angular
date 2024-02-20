import { Injectable } from '@angular/core';
import {Personne} from "../../exercice/models/Personne";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private liste: Personne[] = [
    new Personne('Depierreux', 'Geoffrey', new Date(2000,3,27), '123','Chez Sam', 6800, 'Bertrix')
  ]
  constructor() {
  }

  addPersonne(personne: Personne) {
      this.liste.push(personne);
  }

  getPersonnes(): Personne[] {
      return this.liste;
  }
}
