import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-erreur',
  templateUrl: './erreur.component.html',
  styleUrl: './erreur.component.css'
})
export class ErreurComponent {
  @Input() tabEssais!: number[];
  @Input() aDeviner!: number;
}
