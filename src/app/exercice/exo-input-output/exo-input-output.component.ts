import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-input-output',
  templateUrl: './exo-input-output.component.html',
  styleUrl: './exo-input-output.component.css'
})
export class ExoInputOutputComponent {
  articles: string[] = [];

  ajArt(nom: string) {
    this.articles.push(nom);
  }

  suppArt(id: number){
    this.articles.splice(id, 1);
  }
}
