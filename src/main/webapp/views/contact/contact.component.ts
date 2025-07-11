import {Component} from '@angular/core';
import {ToggleChoiceComponent} from "./toggle-choice/toggle-choice.component";
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-contact',
    imports: [
        ToggleChoiceComponent,
        NgClass
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    formType: "Renseignements" | "Organisation" = "Renseignements";
    get selected() {
        return this.formType == "Renseignements"
    }
    set selected(value) {
        this.formType = value ? "Renseignements" : "Organisation"
    }
}
