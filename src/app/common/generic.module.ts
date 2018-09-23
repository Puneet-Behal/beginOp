import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from './authentication/authentication.module';

import { DisplayModule } from './display/display.module';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationModule,
    DisplayModule,
    RouterModule,
    ButtonModule
  ],
  declarations: [],
  exports : [AuthenticationModule,DisplayModule]
})
export class GenericModule { }
