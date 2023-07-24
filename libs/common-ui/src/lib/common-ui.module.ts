import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormMangementPeopleComponent } from './form-mangement-people/form-mangement-people.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ModalAddEditComponent } from './modal-add-edit/modal-add-edit.component';
import { ModalDelComponent } from './modal-del/modal-del.component';
import { TableComponent } from './table/table.component';
import { InputTextModule } from 'primeng/inputtext';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    TableComponent,
    FormMangementPeopleComponent,
    ModalAddEditComponent,
    ModalDelComponent,
    NavbarComponent,
  ],
  imports: [
    MenubarModule,
    CommonModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
  ],
  exports: [
    TableComponent,
    FormMangementPeopleComponent,
    ModalAddEditComponent,
    ModalDelComponent,
    NavbarComponent,
  ],
})
export class CommonUiModule {}
