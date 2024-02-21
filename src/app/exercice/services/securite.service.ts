import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthDTO, LoginForm, RegisterForm, UserDTO} from "../models/Auth";
import {BehaviorSubject, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SecuriteService {

  userConnected = new BehaviorSubject<string | null>(null)

  constructor(private readonly _httpClient: HttpClient,
              @Inject('localhost') private _apiUrl : string) {
  }

  login(loginForm: LoginForm){
    return this._httpClient.post<AuthDTO>(this._apiUrl+'login', loginForm).pipe(
      tap( data => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.roles.toString());
        localStorage.setItem("login", data.login);
        this.userConnected.next(data.login);
      })
    )
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("login")
    this.userConnected.next(null);
  }

  register( registerForm: RegisterForm){
    return this._httpClient.post(this._apiUrl+'register', registerForm)
  }

  getAllNames(){
    return this._httpClient.get<string[]>(this._apiUrl+'all');
  }

  getOne(){
    return this._httpClient.get<UserDTO>(this._apiUrl+'one');
  }

}
