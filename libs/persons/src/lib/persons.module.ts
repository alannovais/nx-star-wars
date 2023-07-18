import { CommonUiModule } from './../../../common-ui/src/lib/common-ui.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PersonsComponent } from './persons.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonsStore } from './component-store/persons.state';

const routes: Routes = [
  {
    path: '',
    component: PersonsComponent,
  },
];

@NgModule({
  declarations: [PersonsComponent],
  imports: [
    CommonModule,
    CommonUiModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
  providers: [PersonsStore],
})
export class PersonsModule {}
