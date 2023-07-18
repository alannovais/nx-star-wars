import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './state/user/user.reducer';
import { UserListFeature } from './state/user/user.feature';
import { UserEffects } from './state/user/user.effects';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ root: userReducer }),
    StoreModule.forFeature(UserListFeature.name, UserListFeature.reducer),
    EffectsModule.forRoot([UserEffects]),
  ],
  declarations: [],
  providers: [],
})
export class StarWarsModule {}
