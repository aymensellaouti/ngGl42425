import { Component } from '@angular/core';
import { FilsComponent } from "../fils/fils.component";

@Component({
  selector: 'app-pere',
  standalone: true,
  imports: [FilsComponent],
  templateUrl: './pere.component.html',
  styleUrl: './pere.component.css'
})
export class PereComponent {
  messageLweldi = '3ayech weldi';
  onN7abMassrouf(flouss: number) {
    if (flouss > 10) {
      this.messageLweldi = 'essoug ejjay';
    } else {
      this.messageLweldi = 'Allah ibarek teddallel ya ghali :D';
    }
  }

}
