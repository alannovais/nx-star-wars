import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'force-app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() tableData: any[] = [];
  @Input() loading = false;
  @Output() openAddEditDialog: EventEmitter<any> = new EventEmitter();
  @Output() openDelDialog: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    console.log('run');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('arrived', this.tableData);
  }

  showDialog(teste: any) {    
    this.openAddEditDialog.emit(teste);
  }
  delDialog(teste: any) {
    this.openDelDialog.emit(teste);
  }
}
