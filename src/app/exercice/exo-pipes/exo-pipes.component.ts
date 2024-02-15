import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-pipes',
  templateUrl: './exo-pipes.component.html',
  styleUrl: './exo-pipes.component.css'
})
export class ExoPipesComponent {
  temps: number = 0;
  chronoInterval?: number;

  play(){
    if( !this.chronoInterval )
      this.chronoInterval = setInterval(() => this.temps++, 1000)
  }

  pause(){
    if( this.chronoInterval ){
      clearInterval( this.chronoInterval );
      this.chronoInterval = undefined;
    }
  }

  reset(){
    if( this.chronoInterval ){
      clearInterval( this.chronoInterval );
      this.temps = 0;
      this.chronoInterval = undefined;
    }

  }
}
