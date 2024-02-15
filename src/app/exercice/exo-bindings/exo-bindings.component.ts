import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-bindings',
  templateUrl: './exo-bindings.component.html',
  styleUrl: './exo-bindings.component.css'
})
export class ExoBindingsComponent {
  age: number = 0;
  phrase: string = "";

  verifier(){
    if(this.age <18){
      this.phrase= `${this.age} ans, vous êtes mineur!`
    } else{
      this.phrase= `${this.age} ans, vous êtes majeur!`
    }
  }
}
