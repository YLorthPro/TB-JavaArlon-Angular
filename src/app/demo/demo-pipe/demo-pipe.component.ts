import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrl: './demo-pipe.component.css'
})
export class DemoPipeComponent {

  javanais={
    nom: 'Depierreux',
    prenom: 'Geoffrey',
    age: 99
  }
  gaetan= new Date();

}
