import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrl: './read.component.css'
})
export class ReadComponent {
  @Input() liste: string[] = []

  @Output('suppr') event: EventEmitter<number> = new EventEmitter<number>();

  onClick(id: number){
    this.event.emit( id );
  }
}
