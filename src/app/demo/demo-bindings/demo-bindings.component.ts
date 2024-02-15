import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-bindings',
  templateUrl: './demo-bindings.component.html',
  styleUrl: './demo-bindings.component.css'
})
export class DemoBindingsComponent {

  reponseATout = 42;
  monInput: string = "Coucou";
  bool: boolean = true;
}
