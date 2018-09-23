import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ButtonModule, SelectItem, DropdownModule, PanelModule, CardModule } from 'primeng/primeng';
import { DataViewModule } from 'primeng/dataview';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    CardModule,
    RouterModule
  ],
  declarations: [UserlistComponent, UserdetailsComponent,CategoriesComponent],
  exports : [ UserlistComponent, UserdetailsComponent,CategoriesComponent]
})
export class DisplayModule { }
