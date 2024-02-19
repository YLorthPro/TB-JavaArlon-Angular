import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {inThePast} from "./ValidatorsCustom";

@Component({
  selector: 'app-demo-forms',
  templateUrl: './demo-forms.component.html',
  styleUrl: './demo-forms.component.css'
})
export class DemoFormsComponent {
    form: FormGroup;

    constructor(private _formBuilder: FormBuilder) {
      this.form = _formBuilder.group({
        nom: _formBuilder.control('',Validators.required),
        prenom: _formBuilder.control('',Validators.required),
        dateDeNaissance: _formBuilder.control('',[Validators.required, inThePast()])
      });
    }

    onSubmit(){
      if(this.form.valid){
        console.log('Formulaire envoyé')
      }
    }
}
