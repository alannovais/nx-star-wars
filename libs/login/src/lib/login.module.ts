import { CommonUiModule } from './../../../common-ui/src/lib/common-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CommonUiModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginModule {}
