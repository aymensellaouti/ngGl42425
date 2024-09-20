import { Component, computed, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-somme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './somme.component.html',
  styleUrl: './somme.component.css'
})
export class SommeComponent {
  x = signal(5);
  y = signal(10);
  z = computed(() => this.x() + this.y())
}
