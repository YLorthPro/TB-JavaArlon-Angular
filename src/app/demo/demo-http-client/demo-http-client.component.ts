import {Component, OnInit} from '@angular/core';
import {DemoPostService} from "../services/demo-post.service";
import { User} from "../models/User";

@Component({
  selector: 'app-demo-http-client',
  templateUrl: './demo-http-client.component.html',
  styleUrl: './demo-http-client.component.css'
})
export class DemoHttpClientComponent implements OnInit{

  tableau!: User[];
  constructor(private readonly _demoPostService: DemoPostService) {
  }

  ngOnInit() {
    this._demoPostService.getAll().subscribe({
      next: (valeur) => this.tableau=valeur,
      error:(err)=>console.log(err.error()),
      complete:()=>console.log("Chargement terminé")
      }
    );
  }

  envoyer(chose: User){
    this._demoPostService.insert(chose).subscribe()
  }

}
