import { Component } from '@angular/core';
import {HomeComponent} from "../home/home.component";
import {MapComponent} from "../map/map.component";
import {ContactComponent} from "../contact/contact.component";
import {AdhesionComponent} from "../adhesion/adhesion.component";

@Component({
  selector: 'app-land',
  imports: [
    HomeComponent,
    MapComponent,
    ContactComponent,
    AdhesionComponent
  ],
  templateUrl: './land.component.html',
  styleUrl: './land.component.css'
})
export class LandComponent {

}
