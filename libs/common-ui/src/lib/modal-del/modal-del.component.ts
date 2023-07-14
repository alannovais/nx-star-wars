import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'force-app-modal-del',
  templateUrl: './modal-del.component.html',
  styleUrls: ['./modal-del.component.css'],
})
export class ModalDelComponent {
  @Input() visible!: boolean;
  @Input() deltResult: any;
  @Output() closeMd: EventEmitter<any> = new EventEmitter();

  closeModal() {
    this.closeMd.emit(false);
  }
}

