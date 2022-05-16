import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RickMortyAppReducers } from './shared/redux';

/**
 * Modules imported of redux library.
 *
 * @export
 * @class AppModule
 */
const REDUX_MODULES = [
  StoreModule.forRoot(RickMortyAppReducers, {
    runtimeChecks: {
      strictStateImmutability: false,
      strictActionImmutability: false,
    },
  }),
  //EffectsModule.forRoot(WebAppEffects), @TODO TO_BE
  StoreDevtoolsModule.instrument({
    maxAge: 100,
    logOnly: true,
  }),
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...REDUX_MODULES,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
