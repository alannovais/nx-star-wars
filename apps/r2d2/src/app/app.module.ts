import { StoreModule } from '@ngrx/store';
import { ComponentStore } from '@ngrx/component-store';
import { StarWarsModule } from '@force-app/star-wars';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { R2d2AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonsComponent } from './persons/persons.component';
import { userReducer } from '../state/user/user.reducer';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { ButtonModule } from 'primeng/button';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../state/user/user.effects';

@NgModule({
  declarations: [R2d2AppComponent, PersonsComponent, LoginComponent],
  imports: [
    BrowserModule,
    StarWarsModule,
    BrowserAnimationsModule,
    PasswordModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    KeyFilterModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ root: userReducer }),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [ComponentStore],
  bootstrap: [R2d2AppComponent],
  exports: [R2d2AppComponent],
})
export class R2d2AppModule {}
