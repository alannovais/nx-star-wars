import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'force-app-modal-add-edit',
  templateUrl: './modal-add-edit.component.html',
  styleUrls: ['./modal-add-edit.component.css'],
})
export class ModalAddEditComponent {
  @Input() visible!: boolean;
  @Input() editResult: any;
  @Output() closeMd: EventEmitter<any> = new EventEmitter();
  @Output() confirmOptionModal: EventEmitter<any> = new EventEmitter();
  // @Output() 

  closeModal() {
    this.closeMd.emit(false);
  }

  confirmOption(event: any) {
    this.confirmOptionModal.emit(event);
  }

}
