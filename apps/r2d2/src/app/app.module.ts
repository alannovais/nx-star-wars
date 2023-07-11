import { ComponentStore } from '@ngrx/component-store';
import { StarWarsModule } from '@force-app/star-wars';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { R2d2AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonsComponent } from './persons/persons.component';

@NgModule({
  declarations: [R2d2AppComponent, PersonsComponent],
  imports: [
    BrowserModule,
    StarWarsModule,
    ButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [ComponentStore],
  bootstrap: [R2d2AppComponent],
  exports: [R2d2AppComponent],
})
export class R2d2AppModule {}
