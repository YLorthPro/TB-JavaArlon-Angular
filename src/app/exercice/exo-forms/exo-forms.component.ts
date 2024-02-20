import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Personne, PersonneForm} from "../models/Personne";
import {InscriptionService} from "../services/inscription.service";

@Component({
  selector: 'app-exo-forms',
  templateUrl: './exo-forms.component.html',
  styleUrl: './exo-forms.component.css'
})
export class ExoFormsComponent {
  formulaire: FormGroup

  inscrits: Personne[] = []

  data = {
    prenom: '',
    nom: ''
  }

  connectedUser?: Personne;

  constructor(private _formBuilder: FormBuilder,
              private _inscriptionService: InscriptionService) {
    this.formulaire = this._formBuilder.group(PersonneForm);
    //this.formulaire.controls['nom'].setValue('test');
    this.getPersonnes()
  }

  envoyer(){
    if(this.formulaire.valid){
      this._inscriptionService.addPersonne(new Personne(
        this.formulaire.get('nom')?.value,
        this.formulaire.get('prenom')?.value,
        this.formulaire.get('dateDeNaissance')?.value,
        this.formulaire.get('numero')?.value,
        this.formulaire.get('rue')?.value,
        this.formulaire.get('codePostal')?.value,
        this.formulaire.get('ville')?.value,
      ))
      this.formulaire.reset();
      this.getPersonnes()
    }

  }

  getPersonnes() {
      this.inscrits = this._inscriptionService.getPersonnes();
  }

  connection() {
    // Si l'utilisateur n'a rien tapé dans le login, on n'appelle pas le service pour rien
    if (this.data.prenom.trim()) {
      this._inscriptionService.connect(this.data.prenom, this.data.nom);
      this.connectedUser = this._inscriptionService.connectedUser;
    }
  }

  disconnect() {
    this._inscriptionService.disconnect();
    this.connectedUser = this._inscriptionService.connectedUser;
  }
}
