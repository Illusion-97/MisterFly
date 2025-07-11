import {Component, inject, Input} from '@angular/core';
import {ModalRef, ModalService} from "../../../app/services/modal.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  @Input({required: true}) modalRef!: ModalRef
  @Input({required: true}) scroll!: BehaviorSubject<ScrollToOptions>
  @Input({required: true}) icon!: number
  @Input({required: true}) titre!: string
  @Input() x: number = 0
  @Input() y: number = 0


  protected modal = inject(ModalService)

}
