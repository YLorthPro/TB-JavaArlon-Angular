import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-input-output',
  templateUrl: './demo-input-output.component.html',
  styleUrl: './demo-input-output.component.css'
})
export class DemoInputOutputComponent {

  javanais = ['Aline', 'Nathan', 'Pascal', 'Samuel', 'Geoffrey', 'Ismail', 'Gaetan', 'Lucas', 'Laurent', 'Elise']

  ajouterAuParent(chaine: string){
    this.javanais.push(chaine)
  }
}
