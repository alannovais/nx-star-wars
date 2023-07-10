import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'force-app-form-mangement-people',
  templateUrl: './form-mangement-people.component.html',
  styleUrls: ['./form-mangement-people.component.css'],
})
export class FormMangementPeopleComponent implements OnChanges {
  @Input() data: any;
  formGroup = new FormGroup({
    name: new FormControl<string | null>(null),
    mass: new FormControl<number | null>(null),
    gender: new FormControl<boolean | null>(null),
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.formGroup.patchValue({
      name: this.data?.name,
      mass: this.data?.mass,
      gender: this.data?.gender,
    });
  }

  confirmOption() {
    console.log(this.formGroup?.value);
  }
}
