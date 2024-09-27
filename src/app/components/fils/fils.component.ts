import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { UsdToBtcPipe } from '../../pipes/usd-to-btc.pipe';
import { CurrencyPipe } from '@angular/common';
// appFils(messsageDeBaba)

@Component({
  selector: 'app-fils',
  standalone: true,
  imports: [HighlightDirective, UsdToBtcPipe, CurrencyPipe],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.css',
})
export class FilsComponent {
  @Input({ required: true })
  message = '';

  // V1
  // @Output() n7abMassrouf = new EventEmitter<number>();
  n7abMassrouf = output<number>();

  messageMenBaba = input.required();

  onN7abMassrouf() {
    this.n7abMassrouf.emit(1000);
  }
}
