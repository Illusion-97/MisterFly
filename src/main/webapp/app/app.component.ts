import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ModalContainerComponent} from "./modal-container/modal-container.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, ModalContainerComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'lpl';
}
