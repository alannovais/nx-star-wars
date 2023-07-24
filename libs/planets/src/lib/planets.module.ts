import { CommonUiModule } from './../../../common-ui/src/lib/common-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets/planets.component';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsResolver } from './resolvers/plantes.resolver';
import { PlanetsComponentStore } from './component-store/planet.component-store';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
    resolve: { planets: PlanetsResolver },
  },
];

@NgModule({
  imports: [
    CommonModule,
    CommonUiModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
  providers: [PlanetsComponentStore],
  declarations: [PlanetsComponent],
})
export class PlanetsModule {}
