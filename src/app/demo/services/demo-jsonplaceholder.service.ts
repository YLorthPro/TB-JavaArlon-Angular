import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class DemoJsonplaceholderService {

  //const apiUrl = "localhost:8080/"
  constructor(private readonly _httpClient: HttpClient,
              @Inject('apiUrl') private _apiUrl : string) {
  }

  getAll(){
    return this._httpClient.get<User[]>(this._apiUrl + "users")
  }

  insert(utilisateur: User){
    return this._httpClient.post(this._apiUrl, utilisateur)
  }

  getOne(){
    return this._httpClient.get<User>(this._apiUrl + "users/" + 1);
  }
}
