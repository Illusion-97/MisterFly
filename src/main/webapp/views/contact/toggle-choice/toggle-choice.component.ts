import {Component} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-toggle-choice',
    imports: [
        NgClass
    ],
    templateUrl: './toggle-choice.component.html',
    styleUrl: './toggle-choice.component.css'
})
export class ToggleChoiceComponent {
    selected: boolean = false
    data: [toggleData,toggleData] = [
        {
            name: "I'm Selected",
            text: 'U no like me?'
        },
        {
            name: "'cause I'm better!",
            text: 'No choose me'
        }
    ]
}
interface toggleData {
    name:string,
    text: string
}
