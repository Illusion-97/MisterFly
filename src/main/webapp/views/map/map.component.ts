import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, inject, ViewChild} from '@angular/core';
import {BoxComponent} from "./box/box.component";
import {LocationComponent} from "./location/location.component";
import {BehaviorSubject} from "rxjs";
import {ModalRef} from "../../app/services/modal.service";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-map',
    imports: [
        BoxComponent,
        LocationComponent
    ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {
    isDown: boolean = false
    scrollPosition: BehaviorSubject<ScrollToOptions> = new BehaviorSubject<ScrollToOptions>({
        left: 0,
        top: 0
    })
    detector = inject(ChangeDetectorRef)

    @ViewChild("bg")
    bg?: ElementRef<HTMLDivElement>

    scale: number = 0;

    drag(bg: HTMLDivElement ,$event: MouseEvent) {
        if(this.isDown) {
            bg.scrollBy(-$event.movementX, -$event.movementY)
            this.scrollPosition.next({
                left: bg.scrollLeft,
                top: bg.scrollTop
            })
        }
    }

    ref: ModalRef = {
        component: ContactComponent,
        inputs: {}
    }

    @HostListener('window:resize')
    ngAfterViewInit(): void {
        const element = this.bg?.nativeElement;
        const w = element?.clientWidth ?? 0
        this.scale = w < 1024 ? 1 : (w / 1024)
        console.log("w: ", w, "; scale: ", this.scale)
        element?.scrollTo(this.scrollPosition.value)
        this.detector.detectChanges()
    }
}
