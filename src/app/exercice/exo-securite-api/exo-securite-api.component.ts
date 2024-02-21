import {Component, OnDestroy, OnInit} from '@angular/core';
import {SecuriteService} from "../services/securite.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {map} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-exo-securite-api',
  templateUrl: './exo-securite-api.component.html',
  styleUrl: './exo-securite-api.component.css'
})
export class ExoSecuriteAPIComponent{

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private readonly _securiteService: SecuriteService,
              private readonly _formBuilder: FormBuilder,
              private readonly _router: Router) {
    this._securiteService.logout()
    this.loginForm = this._formBuilder.group({
      login: this._formBuilder.control('',Validators.required),
      password: this._formBuilder.control('',Validators.required),

    });
    this.registerForm = this._formBuilder.group({
      nom: this._formBuilder.control('',Validators.required),
      login: this._formBuilder.control('',Validators.required),
      password: this._formBuilder.control('',Validators.required),
    });
  }

  login(){
    this._securiteService.login(this.loginForm.value)
      .subscribe({
        next: (response) => {
          this._router.navigate(['/exercice/mes-badges'])
        },
        error: (err) => {
          if(err.error.status === 403)
            alert(err.error.message)
        },
      });
  }

  register() {
      this._securiteService.register(this.registerForm.value).subscribe(
      ()=> console.log("enregistré!")
        );
  }

}
