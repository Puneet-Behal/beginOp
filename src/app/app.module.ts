import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { GenericModule } from './common/generic.module';
import { AuthenticationModule } from './common/authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { storeEffects } from './store/effects';
import { DaoService } from './services/daoservice';
import { RestApiService } from './services/restService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    RouterModule.forRoot(routes,
      { enableTracing: true }
    ),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states     
    }),   
  StoreModule.forRoot(storeReducer),
  EffectsModule.forRoot(storeEffects), 

  ],
  providers: [DaoService,RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
