import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  /**
   * Elle définit si l element est affiché ou pas
   */
  isHidden = false;

  /**
   * Je cache ou j'affiche l'element
   */
  showHide() {
    this.isHidden = !this.isHidden
  }
}
