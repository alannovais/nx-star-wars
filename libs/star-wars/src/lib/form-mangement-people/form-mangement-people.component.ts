import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'force-app-form-mangement-people',
  templateUrl: './form-mangement-people.component.html',
  styleUrls: ['./form-mangement-people.component.css'],
})
export class FormMangementPeopleComponent implements OnInit {
  formGroup: FormGroup | undefined;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null)
  });
  }
}
