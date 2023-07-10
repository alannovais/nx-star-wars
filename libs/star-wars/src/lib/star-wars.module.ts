import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForceUsersComponent } from './force-users/force-users.component';
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
    ForceUsersComponent,
    TableComponent,
    ModalAddEditComponent,
    ModalDelComponent,
    FormMangementPeopleComponent,
  ],
  exports: [ForceUsersComponent],
})
export class StarWarsModule {}
