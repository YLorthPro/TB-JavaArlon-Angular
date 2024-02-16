import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  article: string = '';
  @Output() ajout: EventEmitter<string> = new EventEmitter<string>();

  ajouterArticle() {
    this.ajout.emit(this.article);
    this.article = '';
  }
}
