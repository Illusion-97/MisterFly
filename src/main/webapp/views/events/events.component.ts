import {AfterViewInit, Component, inject, QueryList, ViewChildren} from '@angular/core';
import {map, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AsyncPipe, DatePipe} from "@angular/common";
import {EventImageComponent} from "./event-image/event-image.component";
import {ModalService} from "../../app/services/modal.service";
import {EventComponent} from "./event/event.component";

@Component({
    selector: 'app-events',
    imports: [
        AsyncPipe,
        DatePipe,
        EventImageComponent
    ],
    templateUrl: './events.component.html',
    styleUrl: './events.component.css'
})
export class EventsComponent {

    messages: Observable<Message[]> = inject(ActivatedRoute).data.pipe(map(({messages}) => messages))
    modal = inject(ModalService)
    openModal(message:Message) {
        this.modal.open({
            component: EventComponent,
            inputs: {}
        })
    }
}

export interface Message {
    created: Date;
    content: string;
    images: string[];
}

