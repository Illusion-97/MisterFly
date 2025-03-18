import {Component} from '@angular/core';
import {NgClass, NgComponentOutlet} from "@angular/common";
import {ModalService} from "../services/modal.service";

@Component({
    selector: 'app-modal-container',
    standalone: true,
    imports: [
        NgComponentOutlet,
        NgClass
    ],
    templateUrl: './modal-container.component.html',
    styleUrl: './modal-container.component.css'
})
export class ModalContainerComponent {

    constructor(protected service: ModalService) {
    }

}
