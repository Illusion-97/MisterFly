import {Component, Input} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
    selector: 'app-event-image',
    imports: [],
    templateUrl: './event-image.component.html',
    styleUrl: './event-image.component.css'
})
export class EventImageComponent {

    @Input({required: true}) img!: string;

    loaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
}
