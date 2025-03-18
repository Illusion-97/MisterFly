import {Component} from '@angular/core';
import {GoogleMap, MapMarker} from '@angular/google-maps';

@Component({
    selector: 'app-adress',
    imports: [
        MapMarker,
        GoogleMap
    ],
    templateUrl: './adress.component.html',
    styleUrl: './adress.component.css'
})
export class AdressComponent {
    protected address = {lat: 43.69775605824078, lng: 7.2784892029561234}
    protected options: google.maps.MapOptions = {
        disableDefaultUI: true,
        center: this.address,
        zoom: 15,
        maxZoom: 20,
        gestureHandling: "cooperative"
    }
}
