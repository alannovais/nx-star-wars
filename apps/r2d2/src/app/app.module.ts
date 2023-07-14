import { CommonModule } from '@angular/common';
import { StarWarsModule } from '@force-app/star-wars';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { R2d2AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [R2d2AppComponent],
  imports: [
    BrowserModule,
    StarWarsModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [R2d2AppComponent],
  exports: [R2d2AppComponent],
})
export class R2d2AppModule {}
