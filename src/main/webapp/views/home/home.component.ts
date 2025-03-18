import {Component} from '@angular/core';
import {AdressComponent} from './adress/adress.component';
import {StepperComponent} from './stepper/stepper.component';
import {StepComponent} from './stepper/step/step.component';

@Component({
    selector: 'app-home',
    imports: [
        AdressComponent,
        StepperComponent,
        StepComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    gallery = Array(11).fill(0)
        .map((v, i) => ({i, sort: Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(({i}) => i)
}
