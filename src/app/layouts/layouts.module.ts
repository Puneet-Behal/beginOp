import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericModule } from '../common/generic.module';
import { AuthenticationModule } from '../common/authentication/authentication.module';
import { HeaderComponent } from './header/header.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { CenterareaComponent } from './centerarea/centerarea.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonModule } from 'primeng/primeng';
import { DisplayModule } from '../common/display/display.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    GenericModule,
    ButtonModule,
    DisplayModule,
    RouterModule
  ],
  declarations: [HeaderComponent, LeftnavComponent, CenterareaComponent, FooterComponent],
  exports: [HeaderComponent,LeftnavComponent,CenterareaComponent,FooterComponent],
})
export class LayoutsModule { }
