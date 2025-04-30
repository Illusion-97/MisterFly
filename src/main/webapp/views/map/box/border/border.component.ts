import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-border',
  standalone: true,
  imports: [],
  templateUrl: './border.component.html',
  styleUrl: './border.component.css'
})
export class BorderComponent {
  @Input({required: true}) position!: 'top' | 'bot' | 'left' | 'right'

  getImage(side: 'left' | '' | 'right' = '') {
    return `url('/public/img/${this.position}${side ? "-" + side : ""}.png')`
  }
}
