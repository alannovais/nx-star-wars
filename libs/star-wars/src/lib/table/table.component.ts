import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'force-app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() tableData: any | null = [];
  @Input() loading = false;
  @Output() openAddEditDialog: EventEmitter<any> = new EventEmitter();
  @Output() openDelDialog: EventEmitter<any> = new EventEmitter();

  showDialog(teste: any) {
    this.openAddEditDialog.emit(teste);
  }
  delDialog(teste: any) {
    this.openDelDialog.emit(teste);
  }
}
