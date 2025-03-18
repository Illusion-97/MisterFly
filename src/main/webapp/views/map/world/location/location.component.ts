import {Component, inject, Input} from '@angular/core';
import {ModalRef, ModalService} from "../../../../app/services/modal.service";

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  @Input({required: true}) modalRef!: ModalRef
  @Input({required: true}) src!: string
  @Input({required: true}) titre!: string
  @Input() x: number = 0
  @Input() y: number = 0


  protected modal = inject(ModalService)

}
