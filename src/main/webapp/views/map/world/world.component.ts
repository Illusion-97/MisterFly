import { Component } from '@angular/core';
import {LocationComponent} from "./location/location.component";
import {ModalRef} from "../../../app/services/modal.service";
import {ContactComponent} from "../../contact/contact.component";

@Component({
  selector: 'app-world',
    imports: [
        LocationComponent
    ],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent {
  isDown: boolean = false

  drag(bg: HTMLDivElement, $event: MouseEvent) {
    if(this.isDown) {
      bg.scrollBy(-$event.movementX, -$event.movementY)
    }
  }

  ref: ModalRef = {
    component: ContactComponent,
    inputs: {}
  }
}
