import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalAddEditComponent } from './modal-add-edit/modal-add-edit.component';

import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';

import { TableComponent } from './table/table.component';
import { ModalDelComponent } from './modal-del/modal-del.component';
import { FormMangementPeopleComponent } from './form-mangement-people/form-mangement-people.component';
import { PersonsStore } from 'apps/r2d2/src/app/component-store/persons.state';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    KeyFilterModule,
  ],
  declarations: [
    TableComponent,
    ModalAddEditComponent,
    ModalDelComponent,
    FormMangementPeopleComponent,
  ],
  providers: [PersonsStore],
  exports: [TableComponent, ModalAddEditComponent, ModalDelComponent],
})
export class StarWarsModule {}
