import {Injectable, Type} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    modal: BehaviorSubject<ModalRef | undefined> = new BehaviorSubject<ModalRef | undefined>(undefined)

    constructor() {
    }

    get isOpen() {
        return !!this.modal.value
    }

    get onClose(): (closeFn: () => void, submitted: boolean) => void {
        return this.modal.value?.onClose || ((closeFn) => closeFn())
    }

    open(ref: ModalRef) {
        this.modal.next(ref)
    }

    close(submitted: boolean) {
        this.onClose((() => this.modal.next(undefined)), submitted)
    }
}

export interface ModalRef {
    component: Type<unknown>,
    inputs: Record<string, unknown>
    onClose?: (closeFn: () => void, submitted: boolean) => void
    title?: string
    cancelText?: string
    submitText?: string
    showClose?: string

}

