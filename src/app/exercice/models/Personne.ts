import {FormGroup, Validators} from "@angular/forms";
import {inThePast} from "../../demo/demo-forms/ValidatorsCustom";

export interface Personne {
  nom: string;
  prenom: string;
  dateDeNaissance: Date;
  numero: string;
  rue: string;
  codePostal: number;
  ville: string;
}

export class Personne{
  nom: string;
  prenom: string;
  dateDeNaissance: Date;
  numero: string;
  rue: string;
  codePostal: number;
  ville: string;

  constructor(nom: string, prenom: string, dateDeNaissance: Date, numero: string, rue: string, codePostal: number, ville: string) {
      this.nom = nom;
      this.prenom = prenom;
      this.dateDeNaissance = dateDeNaissance;
      this.numero = numero;
      this.rue = rue;
      this.codePostal = codePostal;
      this.ville = ville;
  }
}

export const PersonneForm ={
  nom: ['', [Validators.required, Validators.minLength(2)]],
  prenom: ['', [Validators.required, Validators.minLength(2)]],
  dateDeNaissance: ['', [Validators.required, inThePast()]],
  numero: ['', [Validators.required]],
  rue: ['', [Validators.required, Validators.minLength(5)]],
  codePostal: [1000, [Validators.required, Validators.min(1000), Validators.max(9999)]],
  ville: ['', [Validators.required, Validators.minLength(2)]],
}
