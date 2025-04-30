import {booleanAttribute, Component, EventEmitter, Input, Output} from '@angular/core';
import {BorderComponent} from "./border/border.component";

@Component({
    selector: 'app-box',
    standalone: true,
  imports: [
    BorderComponent
  ],
    templateUrl: './box.component.html',
    styleUrl: './box.component.css'
})
export class BoxComponent {
  @Input({transform: booleanAttribute}) closable: boolean = false
  @Input({transform: booleanAttribute}) hFull: boolean = false
  @Input() innerClass : string = "";
  @Output() close: EventEmitter<never> = new EventEmitter<never>()
}
