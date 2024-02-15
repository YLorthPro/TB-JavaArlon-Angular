import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-directives',
  templateUrl: './exo-directives.component.html',
  styleUrl: './exo-directives.component.css'
})
export class ExoDirectivesComponent {
  films: string[] = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "The Lord of the Rings: The Return of the King",
    "Schindler's List",
    "Inception",
    "Fight Club",
    "Forrest Gump",
    "The Matrix",
    "Goodfellas",
    "The Silence of the Lambs",
    "The Green Mile",
    "The Godfather: Part II",
    "Se7en",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Departed",
    "Gladiator",
    "The Lion King",
    "The Prestige"
  ];

  selectedSquare= 1;

  aGauche(){
    // si tout à gauche, on va tout à droite
    if( this.selectedSquare == 0 )
      this.selectedSquare = 5;
    else
      this.selectedSquare--;
  }

  aDroite(){
    // si tout à droite, on va tout à gauche
    if( this.selectedSquare == 5 )
      this.selectedSquare = 0;
    else
      this.selectedSquare++;
  }
}
