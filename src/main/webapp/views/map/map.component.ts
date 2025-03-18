import { Component } from '@angular/core';
import {WorldComponent} from "./world/world.component";

@Component({
  selector: 'app-map',
    imports: [
        WorldComponent
    ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {

}
